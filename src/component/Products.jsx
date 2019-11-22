import React, { Component } from 'react';
/*
https://www.npmjs.com/package/react-data-sort

import Datasort from 'react-data-sort'
*/
class Products extends Component{
	
 	constructor(props){
 		super(props);
 		this.state = {
 			data: [{"productname":"iPhone","id":1},{"productname":"Samsung","id":2},{"productname":"Mi","id":3},{"productname":"Oppo","id":4},{"productname":"Realme","id":5},{"productname":"Intel","id":6},{"productname":"Huwaie","id":7},{"productname":"Motorola","id":8},{"productname":"Pixel","id":9},{"productname":"Sony","id":10}],
 			cart:[],
 		}; 		
 	}

 	addToCart(id,productname){
 		var total = this.state.cart.length;
 		var newId = total+1;
 		const obj = {'productname': productname, 'id': newId};
 		const newCartArray = this.state.cart;
 		newCartArray.push(obj);
 		this.setState({cart: newCartArray});

 	}

 	removeFromCart(d){
 		const cartList = this.state.cart;
 		cartList.splice(d,1);
 		this.setState({cart: cartList});
 	}

 	sortProductList (){
 		
		var prodList = this.state.data;
		var newProdList = prodList.sort((a, b) => a.productname - b.productname).reverse();   
    	console.log(newProdList);
    	this.setState({ newProdList })

	};

	sortCartList (){
 		
		var cartList = this.state.cart;
		var newCartList = cartList.sort((a, b) => a.productname - b.productname).reverse();   
    	console.log(newCartList);
    	this.setState({ newCartList })

	};


 	render() {

 		const productList = this.state.data.map((d,i) =>
 			<div>
 				<div key={d.productname}>{d.productname}</div>
 				<div><button class="btn add-to-cart" onClick={()=> this.addToCart(d.id,d.productname)}>Add to cart</button></div>
 			</div>
 		);

 		const cartList = this.state.cart.map((d,i) =>
 			<div>
 				<div key={d.productname}>{d.productname}</div>
 				<div><button class="btn remove-from-cart" onClick={()=> this.removeFromCart(d)}>Remove</button></div>
 			</div>
 		);

 		return (
 			<div>
 				<div>Products</div>
	 			<div className="product-grid">
	 				<table>
	 					<th>
	 						<td >Product Name 
								<button onClick={()=> this.sortProductList()}>Sort</button>
	 						</td>
	 						<td></td>
	 					</th>
	 					<td>{productList}</td>
	 				</table>
	 				
	 			</div>


	 			<div>Cart</div>
	 			<div> Total Cart Product : {this.state.cart.length}</div>

	 			<div className="product-grid">
	 				<table>
	 					<th className="product">
	 						<td> Cart Product</td>
	 						<td><button onClick={()=> this.sortCartList()}>Sort Cart</button></td>
	 					</th>
	 					<td class="product-grid">{cartList}</td>
	 				</table>
	 				
	 			</div>
	 		</div>


	 	)
 	};
 	

}
export default Products