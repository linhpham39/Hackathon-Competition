import './quizzDetail.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';
import Nav from '../nav/Nav';
const QuizzDetail = () => {
    const questions = [
        { id: 1, question: "Khi bị cháy ở nhà cao tầng, bạn sẽ thoát nạn như thế nào?", answers: ['Chạy lên', 'Đi bằng thang máy', 'Chạy xuống bằng cầu thang bộ theo biển chỉ dẫn thoát nạn trong tòa nhà', 'Ở trong phòng đóng kín cửa lại'], correctAns: 'Chạy xuống bằng cầu thang bộ theo biển chỉ dẫn thoát nạn trong tòa nhà', explanation: 'Nếu có cháy, việc chạy lên hoặc sử dụng thang máy có thể làm gia tăng nguy cơ và làm trầm trọng tình hình. Thay vào đó bạn nên chạy xuống bằng cầu thang bộ theo biển chỉ dẫn thoát nạn trong tòa nhà để đảm bảo an toàn.' },
        { id: 2, question: "Bình chữa cháy loại nào thường được sử dụng để dập tắt đám cháy dầu hoặc điện?", answers: ['Bình chữa cháy bột cát', 'Bình chữa cháy nước', 'Bình chữa cháy bọt biển', 'Bình chữa cháy CO2'], correctAns: 'Bình chữa cháy CO2', explanation: 'Bởi vì CO2 là một chất khí không cháy, nó có khả năng làm giảm nồng độ oxy trong không khí xung quanh đám cháy, từ đó tạo điều kiện không thể cho sự tồn tại và lan truyền của lửa' }, 
        { id: 3, question: "Trong các ký túc xá, nhà trọ, người ta thường dùng bếp dầu để đun nấu. Khi xảy cháy, bếp dầu do chế dầu lúc đun nấu, phạm vi cháy mới chỉ xung quanh bếp dầu, tại chỗ không có bình chữa cháy, chỉ có: nước, cát, chăn (mền). Bạn xử lý thế nào?", answers: ['Xối nước', 'Tạt cát', 'Lấy chăn (mền) nhúng nước trùm lên', 'Đáp án khác'], correctAns: 'Lấy chăn (mền) nhúng nước trùm lên', explanation: 'Cát sẽ tạo lớp vật lý che phủ lên lửa, cản trở khả năng tiếp tục cháy của dầu' }, 
        { id: 4, question: "Hành vi nào bị nghiêm cấm trong Luật phòng cháy và chữa cháy?", answers: ['Báo cháy giả', 'Làm hư hỏng, tự ý thay đổi, di chuyển phương tiện, thiết bị phòng cháy và chữa cháy, biển báo, biển chỉ dẫn và lối thoát nạn', 'Làm hư hỏng các trang thiết bị phòng cháy và chữa cháy', 'Cả a và b'], correctAns: 'Cả a và b', explanation: 'Những hành vi này bị nghiêm cấm để đảm bảo rằng hệ thống phòng cháy và chữa cháy hoạt động hiệu quả và tối ưu trong việc bảo vệ người dân và tài sản khỏi nguy cơ cháy nổ' }, 
        { id: 5, question: "Khi có lửa, bạn nên sử dụng thứ gì để che mặt và hôi khói khi di chuyển qua cửa ra khỏi tòa nhà?", answers: ['Khăn ướt', 'Khăn khô', 'Tấm gương', 'Bát đĩa'], correctAns: 'Khăn ướt', explanation: 'Khăn ướt có thể giúp bạn hít thở dễ dàng hơn trong điều kiện có khói và tăng khả năng thoát nạn an toàn' }, 
        { id: 6, question: "Cửa thoát hiểm nên được làm gì để đảm bảo an toàn trong trường hợp cháy nổ?", answers: ['Đóng kín cửa', 'Sử dụng cửa thoát hiểm để lưu trữ đồ đạc', 'Giữ cửa thoát hiểm sạch sẽ và dễ mở', 'Gắn kín cửa bằng khóa'], correctAns: 'Giữ cửa thoát hiểm sạch sẽ và dễ mở', explanation: 'Cửa thoát hiểm là tuyến đường quan trọng để thoát khỏi tòa nhà khi có sự cố như cháy nổ, và việc giữ cho cửa này luôn sẵn sàng và dễ mở có thể cứu sống nhiều người' }, 
        { id: 7, question: "Cách sử dụng bình chữa cháy bằng bột như thế nào?", answers: ['Ném cả bình vào đám cháy.', 'Lắc bình, rút chốt, hướng loa phun vào ngọn lửa, bóp cò', 'Đứng tại chỗ phun chất chữa cháy', 'Cả a,b,c đều đúng'], correctAns: 'Lắc bình, rút chốt, hướng loa phun vào ngọn lửa, bóp cò', explanation: 'Để sử dụng bình chữa cháy bằng bột, bạn cần thực hiện các bước như sau: Lắc bình, rút chốt, hướng loa phun vào ngọn lửa, bóp cò' }, 
        { id: 8, question: "Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi cho lực lượng nào?", answers: ['Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi ngay cho lực lượng PCCC, qua số 114', 'Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi ngay cho lực lượng PCCC, qua số 113', 'Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi ngay cho UBND Phường', 'Cả a,b,c đều đúng'], correctAns: 'Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi ngay cho lực lượng PCCC, qua số 114', explanation: 'Để báo cáo sự cố cháy hoặc nguy cơ cháy, bạn nên gọi số điện thoại cấp cứu cháy nổ, và ở nhiều nước, số điện thoại này thường là 114' }, 
        { id: 9, question: "Trách nhiệm phòng cháy và chữa cháy là của ai?", answers: ['Cảnh sát PCCC', 'Lực lượng dân phòng', 'Lực lượng PCCC chuyên ngành', 'Mỗi cơ quan, tổ chức, hộ gia đình và cá nhân'], correctAns: 'Mỗi cơ quan, tổ chức, hộ gia đình và cá nhân', explanation: 'Mọi cơ quan, tổ chức, hộ gia đình và cá nhân đều có trách nhiệm tham gia vào công tác phòng cháy và chữa cháy, đảm bảo an toàn cho bản thân, người khác và tài sản của họ. Điều này bao gồm việc tuân thủ các quy tắc an toàn, lập kế hoạch phòng cháy, sử dụng thiết bị phòng cháy và chữa cháy, và tham gia vào các biện pháp phòng cháy cộng đồng' }, 
        { id: 10, question: "Bình chữa cháy bằng bột chữa cháy không hiệu quả đối với đám cháy nào?", answers: ['Chất rắn', 'Chất lỏng', 'Chất khí', 'Các kim loại đang nóng đỏ và thiết bị điện tử'], correctAns: 'Các kim loại đang nóng đỏ và thiết bị điện tử', explanation: 'Đối với các kim loại đang nóng đỏ, cần sử dụng chất chữa cháy phù hợp như chất chữa cháy dựa trên khí (ví dụ: CO2) hoặc chất chữa cháy dựa trên chất lỏng (ví dụ: nước hoặc chất chữa cháy dựa trên chất lỏng khác)' }
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [answerMessage, setAnswerMessage] = useState(null);

    const handleAnswerSelect = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAns) {
            setAnswerMessage('Chính xác!');
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            setBorderColors(selectedAnswer, true);
        } else {
            setAnswerMessage(`Sai. Câu trả lời đúng là: ${currentQuestion.correctAns}`);
            setBorderColors(selectedAnswer, false);
        }
    };

    const setBorderColors = (selectedAnswer, isCorrect) => {
        const answers = document.querySelectorAll('.answer');
        answers.forEach((answer) => {
            if (answer.innerText === selectedAnswer) {
                answer.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            if (answer.innerText === questions[currentQuestionIndex].correctAns) {
                answer.classList.add('correct');
            }
            answer.classList.remove('hover');
        });
    };

    const handleNextQuestion = () => {
        // Reset the answer message and border colors
        setAnswerMessage(null);
        const answers = document.querySelectorAll('.answer');
        answers.forEach((answer) => {
            answer.classList.remove('correct', 'incorrect');
        });

        // Move to the next question
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleQuizCompletion = () => {
        if (correctAnswersCount > 8) {
            return (<p className="quizCompletedMessage">Chúc mừng bạn vượt qua bài test</p>);
        } else {
            return (
            <div className='redoQuizz'>
                <p className="quizCompletedMessage" >Bạn chưa vượt qua bài test.</p>
                <Button onClick={reDoQuizz}>Làm lại</Button>
                <Nav></Nav>
            </div>
            );
        }
    };
    const reDoQuizz = () => {
        window.location.reload();
    }

    return (
        <div className="quizzDetail">
            <div className="generalHeader">
                <Link to="/quizz">
                    <img className="back" src="/back_icon.svg" alt="back" />
                </Link>
                <p>Mức độ 4</p>
                <NotificationsIcon style={{ color: 'white' }} />
            </div>

            <div className="quizzContainer">
                {currentQuestionIndex < questions.length && (
                    <div key={questions[currentQuestionIndex].id} className="questionContainer">
                        <h3 className="question">
                            Câu {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}
                        </h3>
                        <img src="/question_background.svg" alt="background" />
                        <ul className="answers">
                            {questions[currentQuestionIndex].answers.map((answer, index) => (
                                <li
                                    key={index}
                                    className="answer hover"
                                    onClick={() => handleAnswerSelect(answer)}
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>
                        {answerMessage && <p className="explanation">
                            <strong>Giải thích:</strong> {questions[currentQuestionIndex].explanation}
                        </p>}
                    </div>
                )}

                {answerMessage && <p className="answerMessage">{answerMessage}</p>}

                {currentQuestionIndex === questions.length && handleQuizCompletion()}

                {currentQuestionIndex < questions.length && (
                    <button
                        className="nextButton"
                        onClick={handleNextQuestion}
                        disabled={!answerMessage} // Disable button until an answer is selected
                    >
                        Kế tiếp
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizzDetail;