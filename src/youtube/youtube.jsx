import React, { useState, useEffect, useRef } from "react";
import './stylesYoutube.css'
import YoutubeLogo from './images/logo.png'
import Search from './images/search.svg'

export default function Day15() {
    let [currPlaylist, setcurrPlaylist] = useState({
        list: [],
        nextPageToken: '',
        q: ''
    })
    let [currVideo, setCurrVideo] = useState('')
    let searchRef = useRef()
    function fetchnewvideos() {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&pageToken=${currPlaylist.nextPageToken}&maxResults=10&q=${currPlaylist.q}&key=AIzaSyCLx-vJjLmUfvo3pfLnjox0iFdUoW_fZ0g`)
            .then((response) => {
                return response.json();
            })
            .then(function (e) {
                let temparr = e.items.map((item) => {
                    if (item.snippet.title != 'Private video')
                        return <li key={item.id.videoId} onClick={() => fetchCurrentVideo(item.id.videoId)}>
                            <img src={item.snippet.thumbnails.default.url} alt="" />
                            <div className="videoinfo">
                                <h3>{item.snippet.title}</h3>
                                <p>{item.snippet.channelTitle}</p>
                            </div>
                        </li>
                })

                setcurrPlaylist({
                    list: [...currPlaylist.list, ...temparr],
                    nextPageToken: e.nextPageToken,
                    q: currPlaylist.q
                })

            })
    }

    function fetchNewPlaylist(q) {
        console.log(q);
        if (q.length > 0) {
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${q}&key=AIzaSyCLx-vJjLmUfvo3pfLnjox0iFdUoW_fZ0g`)
                .then((response) => {
                    return response.json();
                })
                .then(function (e) {
                    let temparr = e.items.map((item) => {
                        if (item.snippet.title != 'Private video')
                            return <li key={item.id.videoId} onClick={() => fetchCurrentVideo(item.id.videoId)}>
                                <img src={item.snippet.thumbnails.default.url} alt="" />
                                <div className="videoinfo">
                                    <h3>{item.snippet.title}</h3>
                                    <p>{item.snippet.channelTitle}</p>
                                </div>
                            </li>
                    })

                    setcurrPlaylist({
                        list: temparr,
                        nextPageToken: e.nextPageToken,
                        q: q
                    })
                })
        }
    }

    function fetchCurrentVideo(e) {
        setCurrVideo('')
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${e}&key=AIzaSyCLx-vJjLmUfvo3pfLnjox0iFdUoW_fZ0g`)
            .then((response) => {
                return response.json();
            })
            .then(function (info) {
                setCurrVideo(info.items[0])
            })

    }

    function RenderCurrVideo() {
        if (currVideo != '') {
            return <>
                <h1>
                    {currVideo.snippet.title}
                </h1>
                <h3>{currVideo.snippet.channelTitle}</h3>
                <p>{currVideo.snippet.description}</p>
            </>
        } else {
            return <div> </div>
        }
    }

    return <div className="youtubeW">
        <div className="wrapper">
            <header>
                <img src={YoutubeLogo} alt="YouTube" />
                <div className="inp">
                    <input type="text" placeholder="Введите запрос" ref={searchRef} />
                    <button onClick={() => fetchNewPlaylist(searchRef.current.value)}><img src={Search} alt="search" /></button>
                </div>
            </header>
            <div className="feature">
                <div className="embed">
                    {currVideo ? <iframe width="100%" height="500" src={'https://www.youtube.com/embed/' + currVideo.id} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe> : null}
                </div>
                <RenderCurrVideo />
            </div>
            <aside>
                <ul className="gallery">
                    {currPlaylist.list}
                    {currPlaylist.list.length == 0 ? null : <button className='loadMore' onClick={fetchnewvideos}>Load more</button>}
                </ul>
            </aside>
        </div>
    </div>

}