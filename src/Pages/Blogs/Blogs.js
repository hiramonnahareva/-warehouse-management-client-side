import React from 'react';

const Blogs = () => {
    return (
<>
<div>
<h2 className='text-2xl text-amber-700 py-5 text-center'>Question-1: Difference between javascript and nodejs</h2>
<div className="flex justify-center">
<table className="border-collapse border border-slate-400 ... w-[50%]">
  <thead>
    <tr>
      <th className="border border-slate-300 ... p-4">Javascript</th>
      <th className="border border-slate-300 ... p-4"> Node Js</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ... p-4">1. JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
      <td className="border border-slate-300 ... p-4"> 1.Node js is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ... p-4">2. Java is basically used on the client-side</td>
      <td className="border border-slate-300 ... p-4">2. Node js mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ... p-4">3. Java is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
      <td className="border border-slate-300 ... p-4">3. Node js is written in C, C++ and Javascript.</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<div>
<h2 className='text-2xl text-amber-700 py-5 text-center'>Question-2: Differences between sql and nosql databases.</h2>
<div className="flex justify-center">
<table className="border-collapse border border-slate-400 ... w-[50%]">
  <thead>
    <tr>
      <th className="border border-slate-300 ... p-4">SQL</th>
      <th className="border border-slate-300 ... p-4"> NoSQL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300 ... p-4">1. SQL databases are relational.</td>
      <td className="border border-slate-300 ... p-4"> 1.NoSQL databases are non-relational.</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ... p-4">2. SQL databases are vertically scalable.</td>
      <td className="border border-slate-300 ... p-4">2. NoSQL databases are horizontally scalable.</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ... p-4">3. SQL databases are table-based. </td>
      <td className="border border-slate-300 ... p-4">3. NoSQL databases are document, key-value, graph, or wide-column stores.</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<div>
<h2 className='text-2xl text-amber-700 pb-2 text-center'>Question-3: What is the purpose of jwt and how does it work?</h2>
<div className="flex justify-center">
<p className='w-[50%]'>JWT, or JSON Web Token, is an open standard used to share security information between two parties  1.client and 2.server.JWTS differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
</div>
</div>
</>
    );
};

export default Blogs;