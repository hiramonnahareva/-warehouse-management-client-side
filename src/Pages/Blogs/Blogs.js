import React from 'react';

const Blogs = () => {
    return (
<>
<h2 className='text-2xl text-amber-700 py-5 text-center'>Difference between javascript and nodejs</h2>
<div className="flex justify-center">
<table class="border-collapse border border-slate-400 ... w-[50%]">
  <thead>
    <tr>
      <th class="border border-slate-300 ... p-4">Javascript</th>
      <th class="border border-slate-300 ... p-4"> Node Js</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ... p-4">1. JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
      <td class="border border-slate-300 ... p-4"> 1.Node js is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ... p-4">2. Java is basically used on the client-side</td>
      <td class="border border-slate-300 ... p-4">2. Node js mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ... p-4">3. Java is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
      <td class="border border-slate-300 ... p-4">3. Node js is written in C, C++ and Javascript.</td>
    </tr>
  </tbody>
</table>
</div>
</>
    

        // <div className='m-20 lg:text-justify'>
        //     <h2 className='text-2xl text-amber-700 pb-3'>
        //     <article className='lg:flex justify-evenly'>
        //     <table className='leading-10 Mr-10  border-2 border-amber-500 pb-1'>
        //         <tr>
        //      <th className='text-xl text-amber-500'>Javascript </th>  
        //      <th className='text-xl text-amber-500'>Node Js</th> 
        //    </tr>
        //    <tr>
        //    <td>1. JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td> 
        //    <td>1. is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
           
        //    </tr>

             
        //        <td>2. It is basically used on the client-side</td>
        //        <td>2. It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
        //    </table>
        //     </article>
        //    <article>
        //        <h2 className='text-2xl text-amber-700 pb-2'>Question-2: Differences between sql and nosql databases.</h2>
        //    </article>
        //    <article>
        //        <h2 className='text-2xl text-amber-700 pb-2'>Question-3: What is the purpose of jwt and how does it work?</h2>
        //        </article>
        // </div>
    );
};

export default Blogs;