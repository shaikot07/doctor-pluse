import barChat from '../../assets/barchat.png'
import div2 from '../../assets/div-2.png'

const HeSecond = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8 mb-20 bg-[#F4F4F5]">
            <h1 className="w-[576px] mx-auto text-3xl font-bold text-center bg-purple-600">Comprehensive Care <br />for Every Patient</h1>
            <div className='grid grid-cols-5'>
                <div className="w-[200px] bg-[#FBFBFB] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>90%</h1>
                    <p className='p-2'>Patient satisfaction rate, reflecting our commitment.</p>
                    <img className='w-[50%] mx-auto' src={barChat} alt="" />
                </div>
                {/* second div  */}
                <div className=" mt-20 w-[200px] bg-[#fffff5] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>500+</h1>
                    <p >Board-certified <br /> doctors</p>
                    <img className='w-[50%] ml-auto ' src={div2} alt="" />
                </div>
                {/* therd div  */}
                <div className="w-[200px] bg-[#FBFBFB] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>4.8</h1>
                    <p >Patient satisfaction rate, reflecting our commitment.</p>
                    <img className='w-[50%] mx-auto' src={barChat} alt="" />
                </div>
                {/* forth div  */}
                <div className="w-[150px] bg-[#fffff5] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>90%</h1>
                    <p >Patient satisfaction rate, reflecting our commitment.</p>
                    <img className='w-[50%] mx-auto' src={barChat} alt="" />
                </div>
                {/* fifth div  */}
                <div className="w-[150px] bg-[#fffff5] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>90%</h1>
                    <p >Patient satisfaction rate, reflecting our commitment.</p>
                    <img className='w-[50%] mx-auto' src={barChat} alt="" />
                </div>
            </div>

        </div>
    );
};

export default HeSecond;