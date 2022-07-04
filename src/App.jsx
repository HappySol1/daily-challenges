import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./MainpageStyles.css";

import Todo from "./todo/todo";
import Timer from "./timer/timer";
import Menu from "./menu/menu";
import Keyboard from "./keyboard/keyboard";
import Album from "./album/album";
import Slider from "./slider/slider";
import Calculator from "./calculator/calculator";
import Weather from "./weather/weather";
import Validate from "./validate/validate";
import Rps from "./rps/rps";
import Calendar from "./calendar/calendar";
import Youtube from "./youtube/youtube";
import ColorGen from "./colorGen/colorGen";
import PassGen from "./passGen/passGen";
import LoremGen from "./loremGen/loremGen";
import Quiz from "./quiz/quiz";
// https://store.selfteach.me/

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyProjects />} />
          <Route path="todo" element={<Todo />} />
          <Route path="timer" element={<Timer />} />
          <Route path="menu" element={<Menu />} />
          <Route path="keyboard" element={<Keyboard />} />
          <Route path="album" element={<Album />} />
          <Route path="slider" element={<Slider />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="weather" element={<Weather />} />
          <Route path="validate" element={<Validate />} />
          <Route path="rps" element={<Rps />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="youtube" element={<Youtube />} />
          <Route path="colorGen" element={<ColorGen />} />
          <Route path="passGen" element={<PassGen />} />
          <Route path="loremGen" element={<LoremGen />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<MyProjects />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <Link to="/" className='linktomainpage'>
        <img src="arrow_back.svg" alt="" />
      </Link>
      <div className="page">
        <Outlet />
      </div>
    </>
  );
}

function MyProjects() {
  return <div className="MainpageW">
    <div className="title">
      <h2>My Projects</h2>
      <div className="underline"></div>
    </div>
    <div className="project-list">
      <Link to="/colorGen" className='project-item'>
        <div className="project-preview">
          <img src='./previews/colorGen.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Генератор цветов</h5>
        </div>
      </Link>
      <Link to="/passGen" className='project-item'>
        <div className="project-preview">
          <img src='./previews/passGen.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Генератор паролей</h5>
        </div>
      </Link>
      <Link to="/loremGen" className='project-item'>
        <div className="project-preview">
          <img src='./previews/loremGen.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Lorem генератор</h5>
        </div>
      </Link>
      <Link to="/menu" className='project-item'>
        <div className="project-preview">
          <img src='./previews/menu.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Магазин</h5>
        </div>
      </Link>
      <Link to="/youtube" className='project-item'>
        <div className="project-preview">
          <img src='./previews/youtube.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Ютуб</h5>
        </div>
      </Link>
      <Link to="/weather" className='project-item'>
        <div className="project-preview">
          <img src='./previews/weather.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Прогноз погоды</h5>
        </div>
      </Link>
      <Link to="/calendar" className='project-item'>
        <div className="project-preview">
          <img src='./previews/calendar.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Клендарь</h5>
        </div>
      </Link>
      <Link to="/rps" className='project-item'>
        <div className="project-preview">
          <img src='./previews/rps.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Камень нажницы бумага</h5>
        </div>
      </Link>
      <Link to="/keyboard" className='project-item'>
        <div className="project-preview">
          <img src='./previews/keyboard.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Слепая печать</h5>
        </div>
      </Link>
      <Link to="/album" className='project-item'>
        <div className="project-preview">
          <img src='./previews/album.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Мультичек</h5>
        </div>
      </Link>
      <Link to="/slider" className='project-item'>
        <div className="project-preview">
          <img src='./previews/slider.png' alt="" />
        </div>
        <div className="project-title">
          <h5>????</h5>
        </div>
      </Link>
      <Link to="/quiz" className='project-item'>
        <div className="project-preview">
          <img src='./previews/quiz.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Квиз</h5>
        </div>
      </Link>
      <Link to="/timer" className='project-item'>
        <div className="project-preview">
          <img src='./previews/timer.png' alt="" />
        </div>
        <div className="project-title">
          <h5>Таймер</h5>
        </div>
      </Link>
      <Link to="/timer" className='project-item'>
        <div className="project-preview">
          <img src='./previews/Todo.png' alt="" />
        </div>
        <div className="project-title">
          <h5>ToDo</h5>
        </div>
      </Link>
    </div>
  </div>
}