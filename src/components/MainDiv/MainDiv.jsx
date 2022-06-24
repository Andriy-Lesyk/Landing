import React from 'react';
import {
  Div,
  Skilif,
  BlueOval,
  Works,
  Elips,
  Rectan3,
  Symbols,
  SymbIt,
  FirstImage,
  SecondImage,
  ThirdImage,
  EllipRight,
} from './MainDiv.styled';
import Skilify from '../../Images/Skilify.png';
import BlueOv from '../../Images/Rectang.png';
import Work from '../../Images/Work.png';
import Ellip from '../../Images/Ellip.png';
import Rect3 from '../../Images/Rectan3.png';
import Sketch from '../../Images/sketch.png';
import Figma from '../../Images/figma.png';
import Xd from '../../Images/xd.png';
import Imag1 from '../../Images/image1.png'
import Imag2 from '../../Images/image2.png'
import Imag3 from '../../Images/image3.png'
import EllipR from '../../Images/EllipRight.png'

function MainDiv() {
  return (
    <Div>
      <Skilif src={Skilify} />
      <BlueOval src={BlueOv} />
      <Works src={Work} />
      <Elips src={Ellip} />
      <Rectan3 src={Rect3} />
      <Symbols>
        <SymbIt src={Sketch} />
        <SymbIt src={Figma} />
        <SymbIt src={Xd} />
      </Symbols>
      <EllipRight src={EllipR}/>
      <ThirdImage src={Imag3}/>
      <SecondImage src={Imag2}/>
      <FirstImage src={Imag1}/>

    </Div>
  );
}

export default MainDiv;
