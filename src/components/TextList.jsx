import './TextList.css';

export function TextList() {

    const data = [
        {
            index: 1,
            name: 'Geltona',
            color: '#FDB913',
        },
        {
            index: 2,
            name: 'Zalia',
            color: '#006A44',
        },
        {
            index: 3,
            name: 'Raudona',
            color: '#c1272D',
        },
    ];


    return (
        <div className="text-list">
            <p className='title'>Spalvos:</p>
            <ul>
                {data.map(item =>(
                <li key={item.index}>
                    <div className='number'>{item.index}</div>
                    <div className='name'>{item.name}</div>
                    <div className='color' style={{backgroundColor: item.color}}></div>
                </li>
                ))}

            </ul>
        </div>
    );
}