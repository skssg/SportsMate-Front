import React from 'react'
import "../styles/commons/rank.css"

let title = '팀명';
let steps = '점수';

const Rank = () => {
    return (
        <div className='rank-div'>
            <div className='podium-places-container'>
                <div>
                    <div className='podium silver'>
                        <div className='position'>
                            <div>
                                2
                            </div>
                        </div>
                        <div className='class-information'>
                            <div className='title'>
                                {title}
                            </div>
                            <div className='steps'>
                                {steps}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='podium gold'>
                        <div className='position'>
                            <div>
                                1
                            </div>
                        </div>
                        <div className='class-information'>
                            <div className='title'>
                                {title}
                            </div>
                            <div className='steps'>
                                {steps}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='podium bronze'>
                        <div className='position'>
                            <div>
                                3
                            </div>
                        </div>
                        <div className='class-information'>
                            <div className='title'>
                                {title}
                            </div>
                            <div className='steps'>
                                {steps}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rank