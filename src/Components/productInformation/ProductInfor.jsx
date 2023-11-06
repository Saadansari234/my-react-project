import React from "react";
import ProductDetails from "./ProductDetails"
import { OneStar, TwoStar, ThreeStar, FourStar, FiveStar, Onehalf, Twohalf, Threehalf, Fourhalf, Fivehalf } from "../productCart/Ratings";



class ProductInfor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="prod-detail-sec">
                
                <ProductDetails
                    Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fgFNFbSNye8WztH8kQz6hkil1a1whMq2Vw&usqp=CAU"
                    Name="Iphone 14"
                    Price="1,24,000"
                    stars=<FiveStar />
                    Description="6.06-inch (1170x2532) Apple A15 Bionic 12MP with ƒ/1.9 aperture 12MP + 12MP 128GB, 256GB, 512GB"
                />

               

                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/41WQ6Iy2ESL._SX300_SY300_QL70_FMwebp_.jpg"
                    Name="Realme Narzo"
                    Price="23,999"
                    stars=<Threehalf />
                    Description="(Mars Orange,12GB+256GB) Ultra Smooth 120 Hz Super Amoled Curved Display | 100 MP OIS Camera"
                />
                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/61gbJJMLLEL._SL1500_.jpg"
                    Name="Washing Machine"
                    Price="14,990"
                    stars=<FourStar />
                    Description="Samsung 7 kg Fully-Automatic Top Loading Washing Machine (WA70A4002GS/TL, Imperial Silver, Diamond drum)"
                />
                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/511DmhAgHAL._SL1073_.jpg"
                    Name="Television"
                    Price="10,000"
                    stars=<Fourhalf />
                    Description="ONLY BRAND Microsmt Smart LED TV (43-SMT-1024/08-KSR-22),43 Inches"
                />
                  <ProductDetails
                    Image="https://m.media-amazon.com/images/I/61Y7SfcfMxL._SL1441_.jpg"
                    Name="Fridge"
                    Price="13,000"
                    stars=<Twohalf />
                    Description="Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE PRM 2S SAPPHIRE BLOOM-Z, 2023 Model)"
                />
                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/41uGfBsxMRL._SL1500_.jpg"
                    Name="Air Conditioner"
                    Price="30,000"
                    stars=<FourStar />
                    Description="Voltas 1.5 Ton 3 Star, Inverter Split AC(Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 183V Vectra Prism, White)"
                />

                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/51-5mcNUfjL._SL1500_.jpg"
                    Name="Cooler"
                    Price="12,000"
                    stars=<ThreeStar />
                    Description="Bajaj 36L Personal Air Cooler PMH 36 Torque (Anti-Bacterial Technology, Honeycomb Cooling Pads)"
                />

                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/71jnByVetPL._SL1500_.jpg"
                    Name="Computer"
                    Price="37,000"
                    stars=<Threehalf />
                    Description="HP All-in-One PC Intel Pentium J5040 21.5-inch(54.6 cm) FHD Three-Sided Micro-Edge Display(8GB RAM/512GB SSD/Intel UHD Graphics/"
                />

                <ProductDetails
                    Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fgFNFbSNye8WztH8kQz6hkil1a1whMq2Vw&usqp=CAU"
                    Name="Iphone 14"
                    Price="1,24,000"
                    stars=<FiveStar />
                    Description="6.06-inch (1170x2532) Apple A15 Bionic 12MP with ƒ/1.9 aperture 12MP + 12MP 128GB, 256GB, 512GB"
                />
                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/41WQ6Iy2ESL._SX300_SY300_QL70_FMwebp_.jpg"
                    Name="Realme Narzo"
                    Price="23,999"
                    stars=<Threehalf />
                    Description="(Mars Orange,12GB+256GB) Ultra Smooth 120 Hz Super Amoled Curved Display | 100 MP OIS Camera"
                />

                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/511DmhAgHAL._SL1073_.jpg"
                    Name="Television"
                    Price="10,000"
                    stars=<Fourhalf />
                    Description="ONLY BRAND Microsmt Smart LED TV (43-SMT-1024/08-KSR-22),43 Inches"
                />
                <ProductDetails
                    Image="https://m.media-amazon.com/images/I/61Y7SfcfMxL._SL1441_.jpg"
                    Name="Fridge"
                    Price="13,000"
                    stars=<Twohalf />
                    Description="Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE PRM 2S SAPPHIRE BLOOM-Z, 2023 Model)"
                />
            </div>

        )
    }
}

export default ProductInfor;