import React from "react";
import "./BlockDiagram.css";
import arrowimg from "../../Assets/image.png";
import Header from "../Header/Header";

const BlockDiagram = () => {
  return (
    <>
    <Header/>
    <div class="diagram-container">
      <div className="first-part">
        <div className="tank-and-pipe">
          <div className="tank">
            <div className="waterless-area">
              <span>INTAKE RWPH</span>
              <span>FROM RIVER BHAVANI</span>
            </div>
            <div className="water"></div>
          </div>
          <div className="pipe-part">
            <p className="outer-text">6 TRANSMISSION LINE</p>
            <div className="pipe">
              <div className="transmission-line">
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <img src={arrowimg} className="arrow-img" alt="arrow" />
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
              </div>
            </div>
          </div>
          <div className="tank">
            <div className="waterless-area">
              <span>CWPH</span>
              <span style={{ fontWeight: "normal" }}>@KATTAN HILLS</span>
            </div>
            <div className="water"></div>
          </div>
          <div className="pipe-part-2">
            <p className="outer-text">6 TRANSMISSION LINE</p>
            <div className="pipe">
              <div className="transmission-line">
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <img src={arrowimg} className="arrow-img" alt="arrow" />
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
              </div>
            </div>
          </div>
          <div className="cylinder">
            <p className="water-tank-text2 tank-text-1">
              MST<br />
              <span className="tank-text-2">@PANNIMADAL </span>
              <span className="tank-text-2">CAP : 73LL</span>
            </p>
            <div className="vertical-pipe">
              <div className="red-point"></div>
              <div className="red-point"></div>
              <div className="red-point"></div>
              <div className="red-point"></div>
              {/* Horizontal Pipe  */}
              <p className="horizontal-text">10 TRANSMISSION LINE</p>
              <div className="horizontal-pipe">
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
              </div>

              <p className='horizontal-text-1'>@PILLAYARPURAM<br></br>CAP : 20 LL</p>

              <div className="press-enclave">
                <div className="mbr-1">
                  <p className="water-tank-text2">MBR</p>
                </div>
                <div className="pillar-part">
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                  <div className="center-pipe"></div>
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                </div>
                <div className="pillar-part-1">
                  <div className="horizontal-pillar"></div>
                  <div className="horizontal-pillar"></div>
                  <div className="tank-base"></div>
                </div>
              </div>

              <div className="horizontal-text second-text">2 TRANSMISSION LINE</div>
              <div className="horizontal-pipe second-pipe">
                <div className="red-point"></div>
                <div className="red-point"></div>
              </div>

              <div className="press-enclave-2">
                <div className="mbr-1">
                  <p className="water-tank-text2">MBR</p>
                </div>
                <div className="pillar-part">
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                  <div className="center-pipe"></div>
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                </div>
                <div className="pillar-part-1">
                  <div className="horizontal-pillar"></div>
                  <div className="horizontal-pillar"></div>
                  <div className="tank-base"></div>
                </div>
              </div>


              <p className='horizontal-text-2'>@PRESS ENCLAVE<br></br>CAP : 15 LL</p>
            </div>


            <p className='horizontal-text-4'>@BARATHI PARK<br></br>CAP : 38.87 LL</p>
            <div className="vertical-pipe-2">
              <div className="arrow-down"></div>
              <div className="arrow-down"></div>
              <div className="arrow-down"></div>
              <div className="arrow-down"></div>

              <p className="horizontal-text-3">4 TRANSMISSION LINE</p>
              <div className="horizontal-pipe-2">
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="arrow-left"></div>
              </div>

              <div className="press-enclave-3">
                <div className="mbr-1">
                  <p className="water-tank-text2">MBR</p>
                </div>
                <div className="pillar-part">
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                  <div className="center-pipe"></div>
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                </div>
                <div className="pillar-part-1">
                  <div className="horizontal-pillar"></div>
                  <div className="horizontal-pillar"></div>
                  <div className="tank-base"></div>
                </div>

                <p className='horizontal-text-5'>@VALARMATHI NAGAR<br></br>CAP : 20 LL</p>
              </div>

              <div className="horizontal-pipe second-pipe-2">
                <div className="arrow-left"></div>
              </div>

              <div className="press-enclave-4">
                <div className="mbr-1">
                  <p className="water-tank-text2">MBR</p>
                </div>
                <div className="pillar-part">
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                  <div className="center-pipe"></div>
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                </div>
                <div className="pillar-part-1">
                  <div className="horizontal-pillar"></div>
                  <div className="horizontal-pillar"></div>
                  <div className="tank-base"></div>
                </div>
              </div>

              {/*  */}
              <p className="horizontal-text-6">5 TRANSMISSION LINE</p>
              <div className="horizontal-pipe-3">
                <div className="arrow-left"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="red-point"></div>
                <div className="arrow-left"></div>
              </div>

              <div className="press-enclave-5">
                <div className="mbr-1">
                  <p className="water-tank-text2">MBR</p>
                </div>
                <div className="pillar-part">
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                  <div className="center-pipe"></div>
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                </div>
                <div className="pillar-part-1">
                  <div className="horizontal-pillar"></div>
                  <div className="horizontal-pillar"></div>
                  <div className="tank-base"></div>
                </div>
              </div>

              <p className='horizontal-text-7'>@RAMAKRISHANAPURAM (OLD)<br></br>CAP : 30 LL</p>

              {/*  */}
              <div className="horizontal-pipe-4">
                <div className="arrow-left"></div>
              </div>

              <div className="press-enclave-6">
                <div className="mbr-1">
                  <p className="water-tank-text2">MBR</p>
                </div>
                <div className="pillar-part">
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                  <div className="center-pipe"></div>
                  <div className="vertical-pillar"></div>
                  <div className="vertical-pillar"></div>
                </div>
                <div className="pillar-part-1">
                  <div className="horizontal-pillar"></div>
                  <div className="horizontal-pillar"></div>
                  <div className="tank-base"></div>
                </div>
                <p className='horizontal-text-8'>@RAMAKRISHANAPURAM (NEW)<br></br>CAP : 30 LL</p>

              </div>

            </div>
          </div>
        </div>



      </div>
      </div>
      </>
  );
};

export default BlockDiagram;