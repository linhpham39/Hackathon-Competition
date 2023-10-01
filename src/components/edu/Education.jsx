import Nav from '../nav/Nav'
import './education.css'
import "../shared/shared.css";
import Head from '../head/Head';
import { AiOutlineFilter, AiOutlineVerticalAlignMiddle, AiFillStar, AiFillContainer, AiFillClockCircle, AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useState, useRef } from 'react';
import { ref, onValue, set, get } from "firebase/database";
import { database, auth } from '../authentication/firebase';
import { Puff } from 'react-loader-spinner';
const Education = () => {


    const [chooseCourse, setChooseCourse] = useState("allcourse");
    const [courseList, setCourseList] = useState([]);
    const [eduTitle, setEduTitle] = useState("Khoá học phổ biến");
    const [loader, setLoader] = useState(true);
    const [loaderDisplay, setLoaderDisplay] = useState(true);

    //on Loaded using useEffect to update courseList
    useEffect(() => {
        if (chooseCourse === "allcourse") {
            updateCourseListAll();
        } else {
            listMyCourse();
        }
    }, []);



    const updateCourseListAll = () => {
        let dbref = ref(database, 'courses/');
        onValue(dbref, (snapshot) => {
            let data = snapshot.val();
            let courseListHtml = [];
            for (let course in data) {
                let courseItem = data[course];
                let courseItemImg = courseItem.img;
                let courseItemCateImg = courseItem.cateimg;
                let courseItemCate = courseItem.category;
                let courseItemTitle = courseItem.title;
                let courseItemStar = courseItem.star;
                let courseItemLesson = courseItem.lesson;
                let courseItemTime = courseItem.time;
                let keyid = course.toString();
                courseListHtml.push(<CourseItem img={courseItemImg} cateimg={courseItemCateImg} category={courseItemCate} title={courseItemTitle} star={courseItemStar} lesson={courseItemLesson} time={courseItemTime} keyid={keyid} />);
            }

            console.log("done loading all course");
            setLoader(false);
            setTimeout(() => {
                console.log("show loading all course");
                setLoaderDisplay(false);
                setCourseList(courseListHtml);
                setTimeout(() => {
                    let allCourse = document.querySelectorAll(".courseItem");
                    allCourse.forEach((course) => {
                        course.classList.remove("courseItemAppear");
                    });
                }, 100);
            }, 300);

    });
}

const listMyCourse = () => {
    let dbref = ref(database, 'users/' + auth.currentUser.uid + '/courses/');
    let courseListUserFollow = [];
    onValue(dbref, (snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            for (let course in data) {
                let courseid = course.toString();
                courseListUserFollow.push(courseid);
            }
            let dbref2 = ref(database, 'courses/');
            onValue(dbref2, (snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    let courseListHtml = [];
                    for (let course in data) {
                        let courseItem = data[course];
                        let courseItemImg = courseItem.img;
                        let courseItemCateImg = courseItem.cateimg;
                        let courseItemCate = courseItem.category;
                        let courseItemTitle = courseItem.title;
                        let courseItemStar = courseItem.star;
                        let courseItemLesson = courseItem.lesson;
                        let courseItemTime = courseItem.time;
                        let keyid = course.toString();
                        if (courseListUserFollow.includes(keyid)) {
                            courseListHtml.push(<CourseItem img={courseItemImg} cateimg={courseItemCateImg} category={courseItemCate} title={courseItemTitle} star={courseItemStar} lesson={courseItemLesson} time={courseItemTime} keyid={keyid} />);
                        }
                    }

                    setLoader(false);
                    setTimeout(() => {
                        setLoaderDisplay(false);
                        setCourseList(courseListHtml);
                        setTimeout(() => {
                            let allCourse = document.querySelectorAll(".courseItem");
                            allCourse.forEach((course) => {
                                course.classList.remove("courseItemAppear");
                            });
                        }, 100);
                    }, 300);
                    console.log("done loading my course");

                }
            });
        }
    });


}




const handleChooseCourse = (e) => {
    let course = e.target;
    let courseId = course.id;
    setChooseCourse(courseId);
    let allCourse = document.querySelectorAll(".selectCourseText");
    allCourse.forEach((course) => {
        course.classList.remove("active");
    });
    course.classList.add("active");
    setCourseList([]);
    setLoaderDisplay(true);
    setLoader(true);
    if (courseId === "allcourse") {
        updateCourseListAll();
        setEduTitle("Khoá học phổ biến");

    } else {
        listMyCourse();
        setEduTitle("Khoá học của tôi");

    }

}


return (
    <div className="container">
        <div className="childeduContainer">
            <Head />

            <div class="selectCourse">
                <span class="selectCourseText active" id="allcourse" onClick={handleChooseCourse}>Khoá học<div class="selectCourseOutline left"></div></span>
                <span class="selectCourseText" id="mycourse" onClick={handleChooseCourse}>Khoá học của tôi<div class="selectCourseOutline right"></div></span>

            </div>
            <div class="courseSearch">
                <AiOutlineSearch className="searchIcon" />
                <input type="text" placeholder="Tìm kiếm khoá học" id="courseSearchInput">
                </input>
                <AiOutlineFilter className="filterIcon" />
                <AiOutlineVerticalAlignMiddle className="sortIcon" />

            </div>
            <h1 id='eduTitle'>{eduTitle}</h1>
            <div className="courseList">
                <div id="loader" style={{ opacity: (loader ? 1 : 0), scale: (loader ? 1 : 0), display: (loaderDisplay ? "block" : "none") }}>
                    <Puff
                        height="80"
                        width="80"
                        radius={1}
                        color="#ff6b6b"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
                {courseList}
            </div>
            <Nav activeItem="education" />
        </div>
    </div>
)
}

const CourseItem = (props) => {
    let img = (props.img === undefined ? "https://epe.brightspotcdn.com/fa/8d/084defd1432296b8b4abd41faf7b/041823-langreo-fs-1465377050.jpg" : props.img);
    let cateimg = (props.cateimg === undefined ? "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" : props.cateimg);
    let category = (props.category === undefined ? "Khác" : props.category);
    let title = (props.title === undefined ? "Khóa học" : props.title);
    let star = (props.star === undefined ? Math.floor(Math.random() * 5) + 1 : props.star);
    let lesson = (props.lesson === undefined ? Math.floor(Math.random() * 10) + 1 : props.lesson);
    let time = (props.time === undefined ? Math.floor(Math.random() * 10) + 1 : props.time);
    let keyid = (props.keyid === undefined ? "undefined" : props.keyid);


    img = useRef(img);
    cateimg = useRef(cateimg);
    category = useRef(category);
    title = useRef(title);
    star = useRef(star);
    lesson = useRef(lesson);
    time = useRef(time);

    const [registerStatus, setRegisterStatus] = useState(false);
    const [registerButton, setRegisterButton] = useState("Đăng ký");
    const [registerButtonClass, setRegisterButtonClass] = useState("courseRegisterButton");
    let dbref = ref(database, 'users/' + auth.currentUser.uid + '/courses/' + keyid);


    const updateStatusTrue = (status) => {
        if (status === "registered") {
            let dbref = ref(database, 'users/' + auth.currentUser.uid + '/courses/' + keyid);
            set(dbref, {
                status: "registered"
            });
            setRegisterButtonClass("courseRegisterButton registered");
            setRegisterStatus(true);
            setRegisterButton("Đã đăng ký");
        }
    }

    get(dbref).then((snapshot) => {

        if (snapshot.exists()) {
            let data = snapshot.val();
            let status = data.status;
            if (status === "registered") {
                updateStatusTrue(status);
            }
        }
    }).catch((error) => {
        console.error(error);
    });


    const handleRegister = (e) => {
        updateStatusTrue("registered");
    };




    return (
        <div className='courseItem courseItemAppear'>
            <div alt="category" className="courseImg">
                <img src={img.current} alt="category" className="courseImgImg" />
                <div className="courseImgOverlay">
                    <img src={cateimg.current} alt="category" className="courseImgOverlayImg" />
                    <span className="courseImgOverlayText">{category.current}</span>
                </div>
            </div>

            <div className="courseInfo">
                <h3 className="courseInfoTitle">{title.current}</h3>
                <div className="courseInfoDetail">
                    <div className="courseInfoDetailItem">
                        <AiFillStar className="courseInfoDetailItemIcon" />
                        <span className="courseInfoDetailItemText">{star.current}</span>
                    </div>
                    <div className="courseInfoDetailItem">
                        <AiFillContainer className="courseInfoDetailItemIcon" />
                        <span className="courseInfoDetailItemText">{lesson.current} bài học</span>
                    </div>
                    <div className="courseInfoDetailItem">
                        <AiFillClockCircle className="courseInfoDetailItemIcon" />
                        <span className="courseInfoDetailItemText">{time.current} giờ</span>
                    </div>
                </div>
            </div>
            <div className="courseRegister">
                <button className={registerButtonClass} onClick={handleRegister}>{registerButton}</button>
            </div>
        </div>
    )
}


export default Education