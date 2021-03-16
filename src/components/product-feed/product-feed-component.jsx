import React from 'react';
import { useEffect } from 'react';


const ProductFeed = () => {
//we do all our js here in a comp

useEffect(() => {
    const script = document.createElement('script');

    script.src = "//www.auctionnudge.com/feed/item/js/theme/responsive/page/init/img_size/150/cats_output/dropdown/search_box/1/show_logo/1/lang/english/SellerID/partwheeler/siteid/0/MaxEntries/20/sortOrder/StartTimeNewest";
    script.async = true
    document.body.appendChild(script);
}, [])
return(
  <div>
    <div className="product">
      <h3 className="product-title">Products</h3>
      <h4 className="product-description">Specializing in Engine Control Modules(ECU), Audio Radio Amplifiers, Fuse Boxes, and much more.</h4>
      </div>
      <div className="products">
      <div id="auction-nudge-items" className="auction-nudge">
     </div>
    </div>
  </div>
    )
}

export default ProductFeed;

<div id="auction-nudge-items" class="auction-nudge"></div>