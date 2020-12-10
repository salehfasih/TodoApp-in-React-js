export const FirstBook=[{
  id:Math.random(),
    img:"https://images-na.ssl-images-amazon.com/images/I/91r5UtdC7tL._AC_UL320_SR246,320_.jpg",
      title:"If Animals Kissed Good Night",
         Author:"Ann Whitford Paul"
  
  },
  {
    id:Math.random(),
    img:"https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL160_SR160,160_.jpg" ,
     title:"The Very Hungry Caterpillar" ,
       Author:"Eric Carle" 
  },
  {
    id:Math.random(),
    img:"https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL320_SR228,320_.jpg" ,
     title:"Brown Bear, Brown Bear, What Do You See?" ,
       Author:"Bill Martin Jr." 
  }
  ]

  
  // props exaple 
  
//   const Greeting = () => {
//     // return React.createElement('h1',{},"hello world");
//        return(
//          <section>
//            <Book  img={firstBook[0].img}    title={firstBook[0].title}    Author={firstBook[0].Author}  >
             
//            </Book>
           
//            <Book  img={firstBook[1].img}    title={firstBook[1].title}    Author={firstBook[1].Author } />
  
//            <Book  img={firstBook[2].img}    title={firstBook[2].title}    Author={firstBook[2].Author} />
//            {/* <Book img={firstBook[3].img}    title={firstBook[3].title}    Author={firstBook[3].Author }/>
  
//            <Book img={firstBook[4].img}    title={firstBook[4].title}    Author={firstBook[4].Author}/> */}
//            </section>
//        )
//   };
//   const Book = (props) =>{
      
//     return(
//       <div><article ><Image  i={props.img}></Image>
//       <Title    t={props.title}></Title>
//       <Author   a={props.Author}   />
      
//       </article></div>
//     )
//   };
//   const Image = (props) => <img   src={props.i}  />
  
  
//   const Author=(props)=>{
//   return(<p>{props.a}</p>)
//   }
  
//   const Title=(props)=>{
//   return   <p>{props.t}</p>
//   } 


// //   destructure property   props


// const {img,title,Author}=props


