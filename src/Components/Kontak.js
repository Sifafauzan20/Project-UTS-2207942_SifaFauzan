import React from 'react';

const Kontak = () => {
    return (
        <main className='flex'>
            <h1 className='judul'>Contact me</h1>
            <div className='flex-shrink-10'>
                <div className='alamat'>
                    <h3>Email</h3>
                    <p>abysalmonian00@gmail.com</p>
                    <h3>Phone</h3>
                    <p>+62 8213 2342 2312</p>
                    <h3>Address</h3>
                    <p>Cipatujah, Tasikmalaya, West java, Indonesia.</p>
                </div>
                <div className="container1">
                    <form action='#'>
                        <input placeholder='Name' type='text' required></input>
                        <input placeholder='Email' type='email' required></input>
                        <input placeholder='Subject' type='subject' required></input>
                        <textarea placeholder='Comment'></textarea>
                        <input class = "formBtn" type='submit'></input>
                        <input class = "formBtn" type='reset'></input>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Kontak;
