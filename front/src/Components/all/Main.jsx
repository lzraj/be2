import All from "../../Contexts/All";
import List from "./List";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { authConfig } from '../../Functions/auth';

function Main( ) {

        const [lastUpdate, setLastUpdate] = useState(Date.now());
        const [ideas, setIdeas] = useState(null);
        const [donate, setDonate] = useState(null);


        const reList = data => {
            const d = new Map();
            data.forEach(line => {
                if (d.has(line.title)) {
                    d.set(line.title, [...d.get(line.title), line]);
                } else {
                    d.set(line.title, [line]);
                }
            });
            return [...d];
        }


        // READ for list
        useEffect(() => {
            axios.get('http://localhost:3004/home/ideas', authConfig())
                .then(res => {
                    setIdeas(reList(res.data));
                })
        }, [lastUpdate]);

         useEffect(() => {
            if (null === donate) {
                return;
            }
            axios.post('http://localhost:3004/givers/', donate, authConfig())
            .then(res => {
                setLastUpdate(Date.now());
            })
            axios.put('http://localhost:3004/ideas/'+ donate.idea_id, {raised:donate.sum }, authConfig())
            .then(res => {
                setLastUpdate(Date.now());
            })
         }, [donate]);


      return (
        <All.Provider value={{
            ideas,
            setIdeas,
            setDonate
        }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <List/>
                </div>
            </div>
        </div>
        </All.Provider>
    );
}

export default Main;