import './simulation.css'
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const Simulation3 = () => {
  return (
    <div className="simulation">
      <div className="senderHeader">
        <div className="senderHeaderContext">
          <Link to='/rescue'>
            <AiOutlineLeft className="backIcon" />
          </Link>
          <p>Hỏa hoạn - Mô phỏng</p>
        </div>
      </div>

      <div className="simulationContainer">
        <img src='simulation.svg' style={{ width: '100%' }}></img>
      </div>
      <div className="dot-simulation">
        <img className='dot-1' src='/red-dot_icon.svg'></img>
        <img className='dot-2' src='/red-dot_icon.svg'></img>
        <img className='dot-3' src='/red-dot_icon.svg'></img>
        <img className='dot-4' src='/white-dot_icon.svg'></img>
      </div>

      <div className="simulationContent">
        <h2>Mô tả</h2>
        <hr></hr>
        <p className="content">
        Không nên trốn vào nơi kín, tìm cách thoát hiểm
        </p>


        <div className="simulationbtn">
          <Link to='/simulation2'>
            <button>
              <img src='/back_icon.svg'></img>
              Trước
            </button>
          </Link>
          <img src='/grey-dot_icon.svg'></img>
          <img src='/grey-dot_icon.svg'></img>
          <img src='/red-dot_icon.svg'></img>
          <img src='/grey-dot_icon.svg'></img>
          <Link to='/simulation4'>
          <button>
            Sau
            <img src='/white-next_icon.svg'></img>
          </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Simulation3;