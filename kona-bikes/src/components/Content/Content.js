import React, {Component, Fragment} from 'react';
import './Content.css';
import Process from '../../images/process.jpg';
import Process1 from '../../images/process_1.jpg';
import Process2 from '../../images/procces_2.jpg';
import Process3 from '../../images/process_3.jpg';
import Process4 from '../../images/process_4.jpg';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className='content'>
                    <img src={Process} alt="process"/>
                    <div className="text">
                        <p>Любимый байк нашей даунхильной команды, для ежедневных издевательств и серьёзных тренировок в этом году. Обновленная геометрия, делающая его более стабильным и новая вилка Rock Shox Lyrik и это уже не просто быстрый байк, а настоящий «один для всего». Создан, испытан и усовершенствован на северо-востоке антлантического побережься, с полным пренебрежением правилами и традициями. Такой трейлбайк может сделать только Kona. “Kona Process 153 DL это безумно весёлый байк” —Freehub Magazine (USA)</p>
                    </div>
                    <div className='row'>
                        <div className='col col-6'>
                            <img src={Process1} alt="process_1"/>
                            <img src={Process2} alt="process_2"/>
                        </div>
                        <div className='col col-6'>
                            <img src={Process3} alt="process_3"/>
                            <img src={Process4} alt="process_4"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Content;