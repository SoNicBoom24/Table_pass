import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import MyTicket from "../components/myticket";
import { auth, db } from "../api/firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

export default function Ticket() {
  const router = useRouter();
  //   const home = () => router.replace("/");
  const ticket = router.query.ticket;
  const name = router.query.name;
  const location = router.query.location;
  const price = router.query.price;
  const eachPerson = router.query.eachPerson;
  const [items, setItems] = useState([]);
  const [names, setNames] = useState(name);
  const currentUser = auth.currentUser;

  //   let info = { name, ticket, location, price, eachPerson };
  //   const [inputValue, setInputValue] = useState(info);
  const fetchTicket = () => {
    const q = query(
      collection(doc(db, "user", currentUser.uid), "tickets"),
      orderBy("createAT")
    );
    onSnapshot(q, (items) => {
      const newData = items.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setItems(newData);
    });
  };
  useEffect(() => {
    if (router.isReady) {
      fetchTicket();
    }
  }, [router.isReady]);
  //   useEffect(() => {
  //     let result = info;
  //     setItems([...items], result);
  //   }, [names]);
  //   console.log("🚀 ~ file: ticket.js:17 ~ Ticket ~ items:", name);

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center w-full gap-10 mb-5 mt-9">
        <div className="grid grid-cols-6 gap-2 w-full justify-center items-center ">
          <div className="col-start-2 col-span-4 p-3 border-b-2">
            <p className="flex text-3xl ml-3">รายละเอียดบัตร</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2 w-full justify-center items-center">
          {items.map((item, index) => (
            <MyTicket
              key={index}
              name={item.name}
              location={item.location}
              price={item.price}
              eachPerson={item.eachPerson}
              ticket={item.ticket}
            />
          ))}

          {/* <MyTicket
            name={name}
            location={location}
            price={price}
            eachPerson={eachPerson}
            ticket={ticket}
          /> */}
        </div>
      </main>
    </>
  );
}
