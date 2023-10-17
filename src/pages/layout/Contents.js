import React, { useEffect, useState } from 'react'
import './Layout.css'
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';

function Contents() {

    // 백엔드 통신 테스트
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);


    return (
        <div className='contents'>
                
            {/* 상단 배너 */}
            <div className='contents-banner'>
                <img src='https://www.da-gym.co.kr/_next/image?url=https%3A%2F%2Fs3.ap-northeast-2.amazonaws.com%2Fstone-i-dagym-centers%2Fimages%2Fevents%2F2310_invitation_pc.png&w=768&q=75' alt='sample'/>
            </div>

            {/* 검색창 material ui */}
            <div className='contents-search'>
                
                <SearchIcon style={{position:'relative', top:'8px', right:'5px'}}/>
                <span>어떤 운동을 찾고 계신가요?</span>
                
            </div>
            
            {/* 백엔드 통신 테스트구간 */}
            <div style={{height: '200px', marginTop: '100px'}} >
                <h1>백엔드 통신 테스트구간</h1>
                {hello}
            </div>
        </div>
    )
}

export default Contents
