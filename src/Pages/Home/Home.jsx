import React from "react";
import Feed  from "../../Components/Feed/Feed"
import Head from "../../Components/Elementos de interface/Head/Head";
 
const Home = ()=>{
  return(
    <section className="container mainContainer">
      <Head title="Fotos" description="Dogs - Página Inicial"/>
      <Feed/>
    </section>
    ) 
}
export default Home;