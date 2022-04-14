import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../../components/dashboard/Nav'
import Sidebar from '../../components/dashboard/Sidebar'
import dashboardPages from '../utils/dashboardPages'
import style from './../../styles/dashboard/dashboard.module.css'
export default function DashboardWrapper() {
  return (
    <>
    <Routes>
           {
            dashboardPages.map((value)=> {
             return (
                <Route
                    path={value.path}
                    element={
                        <section className={style.mainContainer}>
                            <div className={style.topNav}>
                                <Nav />
                            </div>
                            <div className={style.bottomContainer}>
                                <div className={style.sidebar}>
                                    <Sidebar />
                                </div>
                                <div className={style.content}>
                                    <value.component />
                                </div>
                            </div>
                        </section>
                    }
                />
             )  
            })
            }
        </Routes>
    </>
  )
}
