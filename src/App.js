import React, { Component } from 'react';


function ShopHeader(props){
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

function ShopBodyOptions(props){
  return(
    <div>
      <h2>{props.title}</h2>
      <ShopBodyOptionsCheckbox item={props.cheker}/>
      <ShopBodyOptionsSelector item={props.selector}/>
    </div>
  )
}

function ShopBodyOptionsCheckbox(props){
  return(
    <div>
      {props.item}
      <input type="checkbox" id="coding" name="interest"
        value="coding" checked/>
    </div>
  )
}

function ShopBodyOptionsSelector(props){
  return(
    <div>
      <p>Select Type</p>
      <select>
        <option value ={props.item[0]}>{props.item[0]}</option>
        <option value ={props.item[1]}>{props.item[1]}</option>
        <option value ={props.item[2]}>{props.item[2]}</option>
        <option value ={props.item[3]}>{props.item[3]}</option>
      </select>
    </div>
  )
}

function ShopBodyData(props){
  return(
    <div>
      <h2>{props.data[0].type}</h2>
      <VehicleItem item={props.data[0].items.item1}/>
      <VehicleItem item={props.data[0].items.item2}/>
      <VehicleItem item={props.data[0].items.item3}/>
      <h2>{props.data[1].type}</h2>
      <VehicleItem item={props.data[1].items.item1}/>
      <VehicleItem item={props.data[1].items.item2}/>
      <h2>{props.data[2].type}</h2>
      <VehicleItem item={props.data[2].items.item1}/>
      <VehicleItem item={props.data[2].items.item2}/>
      <VehicleItem item={props.data[2].items.item3}/>
      <VehicleItem item={props.data[2].items.item4}/>
    </div>
  )
}

function VehicleItem(props){
  return(
    <ul>
      <table>
        <TableHeader/>
        <tr>
          <td>{props.item[0]}</td>
          <td>{props.item[1]}</td>
          <td>{props.item[2]}</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
  )
}

function TableHeader(props){
  return(
    <tr>
      <th>Year</th>
      <th>Model</th>
      <th>Price</th>
      <th>Buy</th>
    </tr>
  )
}

function ShopCar(props){
  return(
    <div>
      <ShopHeader title="Welcome to React Transportation" text="The best place
        to buy vehicles online"/>
      <div>
        <ShopBodyOptions title="Choose Options" cheker="New Only"
          selector={["All", "Cars", "Trucks", "Convertibles"]}/>
        <ShopBodyData data={[
          {type:"Cars", items: {
            item1: [2013, "A", "$3200"],
            item2: [2011, "B", "$4400"],
            item3: [2016, "B", "$15500"]}},
          {type:"Trucks", items: {
            item1: [2014, "D", "$18000"],
            item2: [2013, "E", "$5200"]}},
          {type:"Convertibles", items: {
            item1: [2009, "F", "$2000"],
            item2: [2010, "G", "$6000"],
            item3: [2012, "H", "$12500"],
            item4: [2017, "M", "$50000"]}}
        ]}/>
      </div>
    </div>
  )
}


export default ShopCar;
