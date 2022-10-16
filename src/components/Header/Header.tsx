import './style.css';
function Header() {
    return (
        <div className='main'>
            <div className="abc">
                <div className="index">
                    <div className='index-container'>
                        <div className='round'>1
                        </div>
                        <hr />
                    </div>
                    <div>
                        Constractor
                    </div>
                </div>
                <div className="index">
                <div className='index-container'>
                        <div className='round'>2
                        </div>
                        <hr />
                    </div>
                    <div>
                        End user
                    </div>
                </div>
                <div className="index">
                <div className='index-container'>
                        <div className='round'>3
                        </div>
                        <hr />
                    </div>
                    <div>
                        Service location
                    </div>
                </div>
                <div >
                    <div className='round'>4</div>
                    <div>
                        Billing
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;