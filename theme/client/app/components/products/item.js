import React from 'react';

const Product = ({
	name, type, subtype, thumb, url,
}) => (
	<a href={url.replace('#038;', '&')} className="product" style={{ background: `url(${thumb}) no-repeat` }}>
		<div className="product__details">
			<span className="product-name">{name}</span>
			<span className="product-type">{type}</span>
			<span className="product-subtype">{subtype}</span>
		</div>
		<style jsx>{`
				.product {
					display: block;
					position: relative;
					background-size: cover !important;
					min-height: 350px;
					color: #5D5D5D;
					margin-bottom: 30px;
				}

				.product__details {
					padding: 20px;
					background: rgba(255, 255, 255, .8);
					position: absolute;
					width: 100%;
					bottom: 0;
					display: flex;
					flex-direction: column;
				}

				.product-name {
					font-size: 19px;
					margin-bottom: 20px;
				}

				.product-type, .product-subtype {
					font-size: 15px;
					color: #039ED8;
				}

			`}
		</style>
	</a>
);


export default Product;