import React from 'react';


const Card = ({statename, data})=>{
    return(
        <div>
            <h1>{statename}</h1>
            <h2>New Cases Today : {data.newCasesToday}</h2>
            <h2>Total Indian Cases : {data.totalIndianCases}</h2>
            <h2>Total Foreign Cases : {data.totalForeignCases}</h2>
            <h2>totalDeaths : {data.totalDeaths}</h2>
            <h2>Total Recovered : {data.totalRecovered}</h2>
        </div>
    )
}

// "totalIndianCases": 502,
//       "totalForeignCases": 0,
//       "totalRecovered": 285,
//       "totalDeaths": 3,
//       "newCasesToday": 47


const CardsComponent = ({data})=> {
    const data1 = Object.keys(data)

    return(
        <div>
            {
                data1.map((key,index)=>{
                // console.log(key)
                return(
                    <Card key={index} statename={key} data ={data[key]} />
                )})
            }
        </div>
    )
}

export default CardsComponent ;





    // let x;
    // let arr=[]
    // for (x in data){
    //     let a={};
    //     a["name"]= x;
    //     // console.log(x);
    //     a["newCasesToday"]=data[x].newCasesToday
    //     // console.log(data[x].newCasesToday)
    //     a["totalDeaths"]=data[x].totalDeaths
    //     // console.log(data[x].totalDeaths)
    //     a["totalForeignCases"]=data[x].totalForeignCases
    //     // console.log(data[x].totalForeignCases)
    //     a["totalIndianCases"]=data[x].newIndianCases
    //     // console.log(data[x].totalIndianCases)
    //     a["totalRecovered"]=data[x].totalRecovered
    //     // console.log(data[x].totalRecovered)
    //     arr.push(a)
    // }
    // const Cards1 = arr.map(state=>{
    //     return(
    //         <div>
    //             <h1>{state["name"]}</h1>
    //         </div>
    //     )
    // })



    //   console.log(data[key].newCasesToday)
    //     console.log(data[key].totalDeaths)
    //     console.log(data[key].totalForeignCases)
    //     console.log(data[key].totalRecovered) 