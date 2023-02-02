import classes from "./Table.module.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { EqualHeight , EqualHeightElement  } from "react-equal-height";
import  React, { useRef } from "react";

export type TableFormProps = {

    onAddPost: (data:any) => void
}


function TableForm({ onAddPost } : TableFormProps){

    const nameInputRef = useRef<HTMLInputElement>()

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enterdName = nameInputRef.current.value;

        const tableData = {
            name: enterdName,
        }
        console.log(tableData)
        onAddPost(tableData)
    }

    return (

		<div className={classes.block}>
            <form  onSubmit={submitHandler}>
                <button style={{width: '100px', height: '100px'}}>Add</button>
                <input style={{width: '100px', height: '100px'}} type='text' ref={nameInputRef}/>
            </form>
        
			{/* <form className={classes.table} onSubmit={submitHandler}>
                
				<EqualHeight>
					<div className={classes.features}>
						<EqualHeightElement name = "image">
							<div>제품 이미지</div>
						</EqualHeightElement>
						
						<ul>
							<li>Model</li>
							<li>Price</li>
							<li>Customer Rating</li>
							<li>Resolution</li>
							<li>Screen Type</li>
						</ul>
					</div>
				
				
					<Swiper className={classes.products} slidesPerView={3} navigation={true} modules={[Navigation]} >
						<SwiperSlide className={classes.product}>
							<EqualHeightElement name = "image">
								<div className={classes.top}>
									<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
								</div>

							</EqualHeightElement>
							

							<ul className={classes.list}>
								
								<li>$600</li>
								<li ><span>5/5</span></li>
								<li>1080p</li>
								<li>LED</li>
							</ul>
						</SwiperSlide>
						<SwiperSlide className={classes.product}>
							<EqualHeightElement name = "image">
								<div className={classes.top}>
						
									<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
									
								</div>

							</EqualHeightElement>
							

							<ul className={classes.list}>
								<li>Samsung Desktop</li>
								<li>$600</li>
								<li ><span>5/5</span></li>
								<li>1080p</li>
								<li>LED</li>
							</ul>
						</SwiperSlide>
						<SwiperSlide className={classes.product}>
							<EqualHeightElement name = "image">
								<div className={classes.top}>
						
									<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
									
								</div>

							</EqualHeightElement>
							

							<ul className={classes.list}>
								<li>Samsung Ultra Desktop</li>
								<li>$600</li>
								<li ><span>5/5</span></li>
								<li>1080p</li>
								<li>LED</li>
							</ul>
						</SwiperSlide>
						<SwiperSlide className={classes.product}>
							<EqualHeightElement name = "image">
								<div className={classes.top}>
						
									<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
									
								</div>

							</EqualHeightElement>
							

							<ul className={classes.list}>
								<li>Samsung Ultra Desktop</li>
								<li>$600</li>
								<li ><span>5/5</span></li>
								<li>1080p</li>
								<li>LED</li>
							</ul>
						</SwiperSlide>
						<SwiperSlide className={classes.product}>
							<EqualHeightElement name = "image">
								<div className={classes.top}>
						
									<img src="https://m.metashop.co.kr/web/product/big/202203/25e2ec04765cfe928145681aefa6b04f.jpg" alt="product image"/>
									
								</div>

							</EqualHeightElement>
							

							<ul className={classes.list}>
								<li>Samsung Ultra Desktop</li>
								<li>$600</li>
								<li ><span>5/5</span></li>
								<li>1080p</li>
								<li>LED</li>
							</ul>
						</SwiperSlide>
					</Swiper>
			    </EqualHeight>


			
	        </form>
			 */}
	    </div>

    )
}

export default TableForm