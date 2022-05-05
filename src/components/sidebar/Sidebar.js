import React from 'react';

const Sidebar = (props) => {
    return (
        <aside className='menu'>
            <nav  className={'nav'}>
                <ul className={'nav-list'}>
                    {props.database.map((data) => {
                        return (
                            <li className={`list-item ${props.songValue === data.id ? 'is-active' : ''}`}  onClick={() => props.handleClick({...data})} key={data.id}>
                                <span className={'item-thumb'}>
                                    <img className={'img thumb-img'} alt={data.artist} src={data.thumb} />
                                </span>
                                <span className={'item-desc'}>
                                    <span className={'desc-title'}>
                                        <span>{data.name}</span>
                                        <span> - </span>
                                        <span>
                                            <small>{data.version}</small>
                                        </span>
                                    </span>
                                    <span className={'desc-subtitle'}>
                                        <span>by </span>
                                        <span>{data.artist}</span>
                                    </span>       
                                </span>                         
                            </li>
                        )
                    })}
                </ul>                
            </nav>
            
        </aside>
    )
}

export default Sidebar;