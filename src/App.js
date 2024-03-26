import './App.css';
import Home from "./views/pages/Home/Home";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UntrackedInfo from "./views/pages/UntrackedInfo/UntrackedInfo";
import LogIn from "./views/pages/LogIn/LogIn";
import TrackedList from "./views/pages/TrackedList/TrackedList";
import UserTrackedItems from "./views/pages/UserTrackedItems/UserTrackedItems";
import MakeRecord from "./views/pages/MakeRecord/MakeRecord";
import TrackedInfo from "./views/pages/TrackedInfo/TrackedInfo";
import RecordsList from "./views/pages/RecordsList/RecordsList";
import UserList from "./views/pages/UserList/UserList";
import UserInfo from "./views/pages/UserInfo/UserInfo";
import LandingPage from "./views/pages/LandingPage/LandingPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LogIn />} />

                <Route path="/home" element={<Home />} />
                <Route path="/untracked_items/:id" element={<UntrackedInfo />} />
                <Route path="/untracked_items/addBill" element={<UntrackedInfo />} />

                <Route path="/tracked_items/list" element={<TrackedList />} />
                <Route path="/tracked_items/user/:id" element={<UserTrackedItems />} />
                <Route path="/tracked_items/make_record" element={<MakeRecord />} />
                <Route path="/tracked_items/:id" element={<TrackedInfo />} />

                <Route path="/untracked_items/records_list" element={<RecordsList />} />


                <Route path="/users" element={<UserList />} />
                <Route path="/users/:id" element={<UserInfo />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;
