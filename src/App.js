import { CiSearch } from "react-icons/ci";

function App () {
    return (
        <div className='bg-light'>
            <header>
                <div className='a_top bg-white py-1'>
                    <div style={{width:"84%"}} className="container">
                        <div className="row w-100 justify-content-between mx-auto">
                            <div className="col-12 col-md-7">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-3">
                                        <div className="logo">
                                            <img height={65} src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <div className="d-flex align-items-center p-1 px-2 gap-2 border justify-content-start rounded-2">
                                            <CiSearch />
                                            <input type="text" className="border-0 w-100" placeholder="Search for Movies,Events,Plays,Sports and Activities" style={{flex:1,outline:"none",fontSize:"14px"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 bg-danger">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='a_bottom'>
                    Bottom
                </div>
            </header>
        </div>
    )
}

export default App