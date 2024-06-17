import {FC} from 'react';

const Header: FC = () => {
    return (
        <header>
            <nav>
                    <ul>
                        <li className={'logo'}></li>
                        <li className={'item(links)'}></li>
                        <li className={'item(links)'}></li>
                        <li className={'item(links)'}></li>
                        <li className={'item(links)'}></li>
                        <div>
                            {/*<li><a type={'Button'}>Bla</a></li>*/}
                            <button>Bla</button>
                        </div>
                    </ul>
            </nav>
        </header>
    );
};

export default Header;
