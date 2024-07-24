import balance from '../../../public/191-1913783_account-balance-transparent-payment-icon-png-png-download.png'
import cashout from '../../../public/6466947.png'
import cashIn from '../../../public/1224428.png'
import History from '../../../public/images (3).jpeg'
const Agent = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="card bg-base-100 lg:w-2/4 md:w-3/4 shadow-2xl p-4 lg:my-6 md:my-2">
                    <div className='card-body'>
                        <div className='grid grid-cols-2 mx-auto gap-8'>
                            <div className='text-center rounded-lg border items-center  border-black w-48 '>
                                <img className='md:w-44 lg:w-44 mx-auto sm:w-32' src={balance} alt="" />
                                <p>Balance</p>
                            </div>
                            <div className='text-center rounded-lg border items-center  border-black w-48'>
                                <img className='md:w-44 lg:w-44 mx-auto sm:w-32' src={cashout} alt="" />
                                <p>Cash Out</p>
                            </div>
                            <div className='text-center rounded-lg border items-center  border-black w-48'>
                                <img className='md:w-44 lg:w-44 mx-auto sm:w-32' src={cashIn} alt="" />
                                <p>Cash In</p>
                            </div>

                        </div>
                        <div className='mx-auto'>
                            <div className='text-center rounded-lg border items-center  border-black w-48'>
                                <img className='md:w-44 lg:w-44 mx-auto sm:w-32' src={History} alt="" />
                                <p>Payment History</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agent;