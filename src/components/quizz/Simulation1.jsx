import './simulation.css'
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const Simulation = () => {
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
        <img className='dot-2' src='/white-dot_icon.svg'></img>
        <img className='dot-3' src='/red-dot_icon.svg'></img>
        <img className='dot-4' src='/red-dot_icon.svg'></img>
      </div>

      <div className="simulationContent">
        <h2>Mô tả</h2>
        <hr></hr>
        <p className="content">
          Sử dụng chăn/khăn có trong nhà, tẩm ướt trùm lên người, che kín mắt, mũi miệng.
        </p>
        <p className="content">
          Chèn vào cửa
        </p>

        <div className="simulationbtn">
          <Link to='/simulation'>
            <button>
              <img src='/back_icon.svg'></img>
              Trước
            </button>
          </Link>
          <img src='/red-dot_icon.svg'></img>
          <img src='/grey-dot_icon.svg'></img>
          <img src='/grey-dot_icon.svg'></img>
          <img src='/grey-dot_icon.svg'></img>
          <button>
            Sau
            <img src='/white-next_icon.svg'></img>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Simulation;