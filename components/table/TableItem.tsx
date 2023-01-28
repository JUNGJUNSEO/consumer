import classes from "./TableItem.module.css"

// function TableItem(){


//     return (
//         <div className={classes.table}>
// 			<div className={classes.features}>
// 				<div>Models</div>
// 				<ul>
// 					<li>Price</li>
// 					<li>Customer Rating</li>
// 					<li>Resolution</li>
// 					<li>Screen Type</li>
// 				</ul>
// 			</div>
			
// 			<div className={classes.wrapper}>
// 				<ul>
// 					<li className={classes.product}>
// 						<div>
// 							<div className="check"></div>
// 							<div>IMAGE</div>
// 							<h3>Sumsung Series 6 J6300</h3>
// 						</div>

// 						<ul className={classes.list}>
// 							<li>$600</li>
// 							<li className={classes.rate}><span>5/5</span></li>
// 							<li>1080p</li>
// 							<li>LED</li>
// 						</ul>
// 					</li> 

//                 </ul>
//             </div>
//         </div>
//     )
// }


function TableItem(){


    return (
        <div className={classes.table}>
			<div className={classes.features}>
				<div>Models</div>
				<ul>
					<li>Price</li>
					<li>Customer Rating</li>
					<li>Resolution</li>
					<li>Screen Type</li>
				</ul>
			</div>
			
			<div  className={classes.wrapper}>
				<ul className={classes.products}>
					<li className={classes.product}>
						<div className={classes.top}>
							<div ></div>
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Macbook_Air_M1_Silver_PNG.png/1200px-Macbook_Air_M1_Silver_PNG.png" alt="product image"/>
							<h3>Sumsung</h3>
						</div>

						<ul className={classes.list}>
							<li>$600</li>
							<li ><span>5/5</span></li>
							<li>1080p</li>
							<li>LED</li>
						</ul>
					</li> 

					<li className={classes.product}>
						<div className={classes.top}>
							<div ></div>
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Macbook_Air_M1_Silver_PNG.png/1200px-Macbook_Air_M1_Silver_PNG.png" alt="product image"/>
							<h3>Sumsung</h3>
						</div>

						<ul className={classes.list}>
							<li>$600</li>
							<li ><span>5/5</span></li>
							<li>1080p</li>
							<li>LED</li>
						</ul>
					</li> 

                </ul>
            </div>
        </div>
    )
}

export default TableItem