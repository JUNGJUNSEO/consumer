import classes from "./Table.module.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

function Table(){


    return (

        // <div className={classes.table}>
		// 	<div className={classes.features}>
		// 		<div>제품 이미지</div>
		// 		<ul>
		// 			<li>Model</li>
		// 			<li>Price</li>
		// 			<li>Customer Rating</li>
		// 			<li>Resolution</li>
		// 			<li>Screen Type</li>
		// 		</ul>
		// 	</div>
			
		// 	<div  className={classes.wrapper}>
		// 		<ul className={classes.products}>
		// 			<li className={classes.product}>
		// 				<div className={classes.top}>
		// 					<div ></div>
		// 					<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
							
		// 				</div>

		// 				<ul className={classes.list}>
		// 					<li>Samsung Ultra Speed Desktop</li>
		// 					<li>$600</li>
		// 					<li ><span>5/5</span></li>
		// 					<li>1080p</li>
		// 					<li>LED</li>
		// 				</ul>
		// 			</li> 

		// 			<li className={classes.product}>
		// 				<div className={classes.top}>
		// 					<div ></div>
		// 					<img src="https://cdn.allets.com/commerce/goods/resize/650/20211122/1637567584438_%EC%94%A8_c.jpg" alt="product image"/>
					
		// 				</div>

		// 				<ul className={classes.list}>
		// 					<li>Samsung Ultra Speed Desktop</li>
		// 					<li>$600</li>
		// 					<li ><span>5/5</span></li>
		// 					<li>1080p</li>
		// 					<li>LED</li>
		// 				</ul>
		// 			</li> 

		// 			<li className={classes.product}>
		// 				<div className={classes.top}>
		// 					<div ></div>
		// 					<img src="https://cdn.allets.com/commerce/goods/resize/650/20211122/1637567608421_%EC%BD%94%EB%9E%84_c.jpg" alt="product image"/>
							
		// 				</div>

		// 				<ul className={classes.list}>
		// 					<li>Samsung Ultra Speed Desktop</li>
		// 					<li>$600</li>
		// 					<li ><span>5/5</span></li>
		// 					<li>1080p</li>
		// 					<li>LED</li>
		// 				</ul>
		// 			</li> 

        //         </ul>
        //     </div>
        // </div>


		<div className={classes.table}>
			<div className={classes.features}>
				<div>제품 이미지</div>
				<ul>
					<li>Model</li>
					<li>Price</li>
					<li>Customer Rating</li>
					<li>Resolution</li>
					<li>Screen Type</li>
				</ul>
			</div>
			
			
			<Swiper className={classes.products} slidesPerView={2} navigation={true} modules={[Navigation]} >
				<SwiperSlide className={classes.product}>
					<div className={classes.top}>
						<div ></div>
						<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
						
					</div>

					<ul className={classes.list}>
						<li>Samsung Ultra Speed Desktop</li>
						<li>$600</li>
						<li ><span>5/5</span></li>
						<li>1080p</li>
						<li>LED</li>
					</ul>
				</SwiperSlide>
				<SwiperSlide className={classes.product}>
					<div className={classes.top}>
						<div ></div>
						<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
						
					</div>

					<ul className={classes.list}>
						<li>Samsung Ultra Speed Desktop</li>
						<li>$600</li>
						<li ><span>5/5</span></li>
						<li>1080p</li>
						<li>LED</li>
					</ul>
				</SwiperSlide>
				<SwiperSlide className={classes.product}>
					<div className={classes.top}>
						<div ></div>
						<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
						
					</div>

					<ul className={classes.list}>
						<li>Samsung Ultra Speed Desktop</li>
						<li>$600</li>
						<li ><span>5/5</span></li>
						<li>1080p</li>
						<li>LED</li>
					</ul>
				</SwiperSlide>
				<SwiperSlide className={classes.product}>
					<div className={classes.top}>
						<div ></div>
						<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
						
					</div>

					<ul className={classes.list}>
						<li>Samsung Ultra Speed Desktop</li>
						<li>$600</li>
						<li ><span>5/5</span></li>
						<li>1080p</li>
						<li>LED</li>
					</ul>
				</SwiperSlide>
			</Swiper>
	

			
	</div>
    )
}

export default Table