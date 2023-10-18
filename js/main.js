// import core_1mn from '../1mn/core_1mn.js';
import { art_box } from "../libs/artbox/art_box.js";


const mArtBox = art_box();
const m_asset_path = '../assets';

// Renderer:--
let mGameRenderer = (data = {}, mDOM) => {
    let mDiv = document.createElement("div");
    mDiv.style.position = 'relative';
    mDiv.style.width = '100%';
    mDiv.style.height = '100%';
    mDOM.appendChild(mDiv); //your root element end [----mDiv----]


    //--mArtBox--//
    let mArtBox_evnt = mArtBox.set({ "e": mDiv });
    let mScene = mArtBox_evnt.get_scene();


    //utilities..
    let mUtils = {
        // mArtBox_evnt.add_animation({
        //     "e":mScene,
        //     "type":"animate__bounce"
        // });
    };

    //--my-code--//
    let myCODE = {

    };



    //mDta_main:--
    let mDta_main = {
        "utils": {},
        "gVars": {  //Global-Variables
            "my_var_1": "",
        },
        "screens": {  //screens
            "rndr": { //Renderer..
                "l": [ //list..

                    // Screen - 1 -----------------------------
                    {
                        "name": "Screen 1",
                        "key": "scr_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb") && v["value"]["cb"].hasOwnProperty(cb_name)) {
                                    v["value"]["cb"][cb_name](p);
                                }
                            };

                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            let mSet = (mE = document.body) => {

                                // BG Splash 1 - Rotate:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_splash_1.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        setTimeout(() => {
                                            anime({
                                                targets: v.e,
                                                rotate: 65,
                                                scale: 2.5,
                                                easing: 'linear'
                                            })
                                        }, 100);

                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            "x": 0,
                                            "y": 0,
                                            "e": mE,
                                            "src": `${m_asset_path}/bg_lightblue.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.opacity = "0";
                                                v.e.style.transform = "rotate(-25deg)";
                                                setTimeout(() => {
                                                    anime({
                                                        targets: v.e,
                                                        opacity: 1,
                                                        scale: 2,
                                                        scaleY: [
                                                            { value: 0, duration: 0 },
                                                            { value: 1, duration: 1000, easing: 'easeInOutQuad' }
                                                        ],
                                                        duration: 2000,
                                                        delay: 1000,
                                                    });
                                                }, 1000);

                                                setTimeout(() => {
                                                    let logoDiv = document.createElement('div');
                                                    logoDiv.style.width = '15vh';
                                                    logoDiv.style.height = '15vh';
                                                    logoDiv.style.backgroundColor = 'white';
                                                    logoDiv.style.borderRadius = '50px';
                                                    logoDiv.style.position = 'absolute';
                                                    logoDiv.style.top = '43%';
                                                    logoDiv.style.left = '46%';
                                                    logoDiv.style.zIndex = '10';
                                                    logoDiv.style.transform = "rotate(25deg)";
                                                    mArtBox_evnt.add_animation({
                                                        "e": logoDiv,
                                                        "type": "animate__zoomIn"
                                                    });
                                                    let value = v.e;
                                                    value.appendChild(logoDiv);

                                                    setTimeout(() => {
                                                        let logoText = document.createElement('h1');
                                                        logoText.innerText = "Logo"
                                                        logoText.style.color = '#000';
                                                        logoText.style.fontSize = '3vh';
                                                        logoText.style.fontWeight = '600';
                                                        logoText.style.position = 'absolute';
                                                        logoText.style.top = '40%';
                                                        logoText.style.left = '30%';
                                                        logoText.style.zIndex = '100';
                                                        mArtBox_evnt.add_animation({
                                                            "e": logoText,
                                                            "type": "animate__zoomIn"
                                                        });
                                                        logoDiv.appendChild(logoText);
                                                    }, 500);
                                                }, 3000);
                                            }
                                        });

                                        // Dashboard:--
                                        setTimeout(() => {
                                            mArtBox_evnt.add_svg({
                                                "w": `100vw`,
                                                "h": `100vh`,
                                                "x": 0,
                                                "y": 0,
                                                "e": mE,
                                                "src": `${m_asset_path}/dashboard.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `7vw`,
                                                        "h": `5vh`,
                                                        "x": 88,
                                                        "y": 87,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/next_btn.svg`
                                                    }, {
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.cursor = 'pointer';
                                                        },
                                                        "onClick": (v = {}) => {
                                                            v.e.style.transform = 'scale(0.8)';
                                                            on_scr_end();
                                                        }
                                                    });
                                                }
                                            });
                                        }, 4000);
                                    }
                                });

                                let on_scr_end = () => {
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // screen - 2---------------------
                    {
                        "name": "Screen 2",
                        "key": "scr_2",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb") && v["value"]["cb"].hasOwnProperty(cb_name)) {
                                    v["value"]["cb"][cb_name](p);
                                }
                            };

                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            let mSet = (mE = document.body) => {

                                // BG & Next Btn:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "x": 0,
                                    "y": 0,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_blue_white.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({ // Next btn
                                            "w": `7vw`,
                                            "h": `5vh`,
                                            "x": 80,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/next_btn.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.cursor = 'pointer';
                                            },
                                            "onClick": (v = {}) => {
                                                on_scr_end();
                                            }
                                        });
                                    }
                                });//--------

                                // Descriptions:--
                                mArtBox_evnt.add_svg({ //Mic test des
                                    "w": `45vw`,
                                    "h": `30vh`,
                                    "x": 25,
                                    "y": 28,
                                    "e": mE,
                                    "src": `${m_asset_path}/mic_test_description.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // mArtBox_evnt.add_svg({//start test btn
                                        //     "w": `23vh`,
                                        //     "h": `7vh`,
                                        //     "x": 29,
                                        //     "y": 66,
                                        //     "e": mE,
                                        //     "src": `${m_asset_path}/start_test_btn.svg`
                                        // }, {
                                        //     "onLoad": (v = {}) => {
                                        //         v.e.style.cursor = 'pointer';
                                        //     },
                                        //     "onClick": (v = {}) => {
                                        //         // on_scr_end();
                                        //     }
                                        // });//---

                                        //start test btn:--
                                        let btnDiv = document.createElement('div');
                                        btnDiv.style.width = '40vw';
                                        btnDiv.style.height = '30vh';

                                        let btnImg = document.createElement('img');
                                        btnImg.src = `${m_asset_path}/start_test_btn.svg`;
                                        btnImg.style.width = '23vh';
                                        btnImg.style.height = '8vh';
                                        btnImg.style.position = 'absolute';
                                        btnImg.style.left = '7%';
                                        btnImg.style.top = '60%';
                                        btnImg.style.cursor = 'pointer';
                                        btnImg.style.zIndex = '100';
                                        let value = v.e;
                                        btnDiv.appendChild(btnImg);
                                        value.appendChild(btnDiv);
                                        btnImg.addEventListener('click', function () {
                                            // alert('Mic Test clicked!');
                                            mSendCB(`on_scr_end`, { "test": "mic" });
                                        });
                                        //---

                                        mArtBox_evnt.add_svg({//s0und test btn
                                            "w": `25vh`,
                                            "h": `7vh`,
                                            "x": 51.5,
                                            "y": 28,
                                            "e": mE,
                                            "src": `${m_asset_path}/sound_test_btn.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.cursor = 'pointer';
                                            },
                                            "onClick": (v = {}) => {
                                                soundTest()
                                                v.e.style.opacity = "0";
                                            }
                                        });//---

                                        let soundTest = () => {
                                            v.e.style.opacity = "0";

                                            mArtBox_evnt.add_svg({//Sound test des.
                                                "w": `45vw`,
                                                "h": `30vh`,
                                                "x": 25,
                                                "y": 28,
                                                "e": mE,
                                                "src": `${m_asset_path}/sound_test_description.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    //start test btn:-
                                                    let btnDiv = document.createElement('div');
                                                    btnDiv.style.width = '40vw';
                                                    btnDiv.style.height = '30vh';

                                                    let btnImg = document.createElement('img');
                                                    btnImg.src = `${m_asset_path}/start_test_btn.svg`;
                                                    btnImg.style.width = '23vh';
                                                    btnImg.style.height = '8vh';
                                                    btnImg.style.position = 'absolute';
                                                    btnImg.style.left = '7%';
                                                    btnImg.style.top = '60%';
                                                    btnImg.style.cursor = 'pointer';
                                                    let value = v.e;
                                                    btnDiv.appendChild(btnImg);
                                                    value.appendChild(btnDiv);
                                                    btnImg.addEventListener('click', function () {
                                                        mSendCB(`on_scr_end`, { "test": "sound" });
                                                    });
                                                    //---

                                                    mArtBox_evnt.add_svg({
                                                        "w": `25vh`,
                                                        "h": `7vh`,
                                                        "x": 34.5,
                                                        "y": 28,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/mic_test_btn.svg`
                                                    }, {
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.cursor = 'pointer';
                                                        },
                                                        "onClick": (v = {}) => {
                                                            micTest()
                                                            v.e.style.opacity = "0";
                                                        }
                                                    });

                                                    let micTest = () => {
                                                        v.e.style.opacity = "0";
                                                        againMic();
                                                    }//---
                                                }
                                            });
                                        }//---

                                        let againMic = () => {
                                            v.e.style.opacity = "1";
                                            mArtBox_evnt.add_svg({
                                                "w": `25vh`,
                                                "h": `7vh`,
                                                "x": 51.5,
                                                "y": 28,
                                                "e": mE,
                                                "src": `${m_asset_path}/sound_test_btn.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = 'pointer';
                                                },
                                                "onClick": (v = {}) => {
                                                    soundTest()
                                                    v.e.style.opacity = "0";
                                                }
                                            });
                                        }//---
                                    }
                                });//-------

                                let on_scr_end = () => {
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen - 2_1 -----------------------------
                    {
                        "name": "Screen 2_1",
                        "key": "scr_2_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.position = "relative";

                            let mSet = (mE = document.body) => {

                                // BG & Next button:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "x": 0,
                                    "y": 0,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_blue_white.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({ // Next btn
                                            "w": `7vw`,
                                            "h": `5vh`,
                                            "x": 80,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/next_btn.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.cursor = 'pointer';
                                            },
                                            "onClick": (v = {}) => {
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        });
                                    }
                                });//--------


                                // Mic Waving:--
                                const imgDiv = document.createElement('div');
                                imgDiv.style.position = "absolute";
                                imgDiv.style.height = "30vh";
                                imgDiv.style.width = "65vw";
                                imgDiv.style.top = "24%";
                                imgDiv.style.left = "18vw";

                                imgDiv.innerHTML = `
                                <lottie-player src="https://lottie.host/8d246fd1-2c9c-4ecd-b750-e921c2060598/6DxWmzORYG.json"
                                    speed="1" 
                                    style="width: 100%; height: 30vh;
                                    transform: scale(2); 
                                    background: rgba(207, 206, 206, 0.80);"
                                    loop
                                    autoplay
                                ></lottie-player>
                                `;
                                mE.appendChild(imgDiv);

                                // mArtBox_evnt.add_svg({ //--Mic voice wave
                                //     "w": `20vw`,
                                //     "h": `10vh`,
                                //     "x": 50,
                                //     "y": 52,
                                //     "e": mE,
                                //     // "src": `https://lottie.host/8d246fd1-2c9c-4ecd-b750-e921c2060598/6DxWmzORYG.json`
                                // }, {
                                //     "onLoad": (v = {}) => {

                                // mic voice checking text:--
                                mArtBox_evnt.add_svg({
                                    "w": `50vw`,
                                    "h": `4vh`,
                                    "x": 25,
                                    "y": 60,
                                    "e": mE,
                                    "src": `${m_asset_path}/mic_voice_checking_result.svg`
                                });

                                // Go back btn:--
                                mArtBox_evnt.add_svg({
                                    "w": `15vw`,
                                    "h": `7vh`,
                                    "x": 42.8,
                                    "y": 70,
                                    "e": mE,
                                    "src": `${m_asset_path}/go_back_btn.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.cursor = 'pointer';
                                    },
                                    "onClick": (v = {}) => {
                                        mSendCB(`on_scr_end`, { "test": "mic" });
                                    }
                                });

                                //     }
                                // });

                            }

                            mSet(mScr);
                        }
                    },

                    // Screen - 2_2 -----------------------------
                    {
                        "name": "Screen 2_2",
                        "key": "scr_2_2",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.position = "relative";

                            let mSet = (mE = document.body) => {
                                // BG & Next button:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "x": 0,
                                    "y": 0,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_blue_white.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({ // Next btn
                                            "w": `7vw`,
                                            "h": `5vh`,
                                            "x": 80,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/next_btn.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.cursor = 'pointer';
                                            },
                                            "onClick": (v = {}) => {
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        });
                                    }
                                });//--------

                                // Sound Speaker Waving:--
                                const imgDiv = document.createElement('div');
                                imgDiv.style.position = "absolute";
                                imgDiv.style.height = "30vh";
                                imgDiv.style.width = "65vw";
                                imgDiv.style.top = "24%";
                                imgDiv.style.left = "18vw";

                                imgDiv.innerHTML = `
                                <lottie-player src="https://lottie.host/0e6c31ce-8c42-4f84-a8b1-6f80930685d6/8NquL6eb51.json"
                                    speed="1" 
                                    style="width: 100%; height: 100%;"
                                    loop
                                    autoplay
                                ></lottie-player>
                                `;
                                mE.appendChild(imgDiv);
                                //---

                                // mic voice checking text:--
                                mArtBox_evnt.add_svg({
                                    "w": `50vw`,
                                    "h": `4vh`,
                                    "x": 25.5,
                                    "y": 60,
                                    "e": mE,
                                    "src": `${m_asset_path}/sound_speaker_checking_result.svg`
                                });

                                // Go back btn:--
                                mArtBox_evnt.add_svg({
                                    "w": `15vw`,
                                    "h": `7vh`,
                                    "x": 42.8,
                                    "y": 70,
                                    "e": mE,
                                    "src": `${m_asset_path}/go_back_btn.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.cursor = 'pointer';
                                    },
                                    "onClick": (v = {}) => {
                                        mSendCB(`on_scr_end`, { "test": "sound" });
                                    }
                                });//---

                            }

                            mSet(mScr);
                        }
                    },

                    // Screen - 3 -----------------------------
                    {
                        "name": "Screen 3",
                        "key": "scr_3",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.position = "relative";

                            let mSet = (mE = document.body) => {
                                // BG Lightblue Designed 1,2,3:--
                                mArtBox_evnt.add_svg({ //1
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    // "x": 0,
                                    // "y": 0,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_lightblue_designed_1.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        setTimeout(() => {
                                            v.e.style.opacity = "0";
                                            mArtBox_evnt.add_svg({ //2
                                                "w": `100vw`,
                                                "h": `100vh`,
                                                "x": 0,
                                                "y": 0,
                                                "e": mE,
                                                "src": `${m_asset_path}/bg_lightblue_designed_2.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    setTimeout(() => {
                                                        v.e.style.opacity = "0";
                                                        v.e.style.transition = "transform 1s ease";
                                                        mArtBox_evnt.add_svg({ //3
                                                            "w": `100vw`,
                                                            "h": `100vh`,
                                                            "x": 0,
                                                            "y": 0,
                                                            "e": mE,
                                                            "src": `${m_asset_path}/bg_lightblue_designed_3.svg`
                                                        }, {
                                                            "onLoad": (v = {}) => {
                                                                // reShow();
                                                            }
                                                        });
                                                    }, 2000);
                                                }
                                            });
                                        }, 1000);
                                    }
                                });//--------

                                // Bg white:--
                                mArtBox_evnt.add_svg({
                                    "w": `80vw`,
                                    "h": `80vh`,
                                    "x": 10,
                                    "y": 10,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_white.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '100';

                                        // Speaking about rose page1 data:--
                                        mArtBox_evnt.add_svg({
                                            "w": `70vw`,
                                            "h": `70vh`,
                                            "x": 15,
                                            "y": 15,
                                            "e": mE,
                                            "src": `${m_asset_path}/speaking_about_rose_page1.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.zIndex = '100';

                                                // Speak now transparent circle:--
                                                mArtBox_evnt.add_svg({
                                                    "w": `5vw`,
                                                    "h": `5vh`,
                                                    "x": 27,
                                                    "y": 37,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/speak_in_text.svg`
                                                }, {
                                                    "onLoad": (v = {}) => {
                                                        v.e.style.zIndex = '100';
                                                        v.e.style.border = '1px solid';
                                                        v.e.style.borderRadius = '50%';
                                                        v.e.style.width = "13vw";
                                                        v.e.style.height = "13vw";

                                                        let svg = v.e.querySelector('svg');
                                                        svg.style.position = "absolute";
                                                        svg.style.top = "40%";
                                                        svg.style.left = "28%";
                                                    }
                                                });
                                            }
                                        });

                                        setTimeout(() => {
                                            mArtBox_evnt.add_animation({
                                                "e": v.e,
                                                "type": "animate__zoomOut"
                                            });
                                            v.e.style.animationDuration = "2s;"
                                        }, 2500);
                                    }
                                });//-------

                                // Bg white & Speak now Btn:--
                                setTimeout(() => {
                                    mArtBox_evnt.add_svg({//bg-white
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/bg_white.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            v.e.style.zIndex = '100';
                                            mArtBox_evnt.add_animation({
                                                "e": v.e,
                                                "type": "animate__fadeInTopLeft"
                                            });

                                            // Speak now btn:--
                                            mArtBox_evnt.add_svg({
                                                "w": `15vw`,
                                                "h": `15vw`,
                                                "x": 43,
                                                "y": 40,
                                                "e": mE,
                                                "src": `${m_asset_path}/speak_now_circle_btn.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_animation({
                                                        "e": v.e,
                                                        "type": "animate__fadeIn"
                                                    });
                                                    v.e.style.zIndex = '100';
                                                    v.e.style.cursor = 'pointer';
                                                },
                                                "onClick": (v = {}) => {
                                                    mSendCB(`on_scr_end`, {});
                                                }
                                            });
                                        }
                                    });
                                }, 2500);//----
                            }

                            mSet(mScr);
                        }
                    },

                    // Screen 4 ---------------------
                    {
                        "name": "Screen 4",
                        "key": "scr_4",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                // BG Lightblue designed:--
                                mArtBox_evnt.add_svg({ //1
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    // "x": 0,
                                    // "y": 0,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_lightblue_designed_1.svg`
                                }, {
                                    "onLoad": (v = {}) => { }
                                });

                                // BG white:--
                                mArtBox_evnt.add_svg({//bg-white
                                    "w": `80vw`,
                                    "h": `80vh`,
                                    "x": 10,
                                    "y": 10,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_white.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '100';

                                        // Countdown length:--
                                        mArtBox_evnt.add_svg({
                                            "w": `75vw`,
                                            "h": `2vh`,
                                            "x": 12,
                                            "y": 16,
                                            "e": mE,
                                            "src": `${m_asset_path}/countdown_length.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.zIndex = '100';
                                                v.e.style.opacity = '0';
                                                setTimeout(() => {
                                                    v.e.style.opacity = 1;
                                                    anime({
                                                        targets: v.e,
                                                        width: ['0%', '100%'],
                                                        duration: 7000,
                                                        easing: 'easeInOutQuad'
                                                    });

                                                    setTimeout(() => {
                                                        on_scr_end();
                                                    }, 7100);
                                                }, 500);
                                            }
                                        });

                                        // Rose and headline:--
                                        mArtBox_evnt.add_svg({
                                            "w": `68vw`,
                                            "h": `44vh`,
                                            "x": 16,
                                            "y": 20,
                                            "e": mE,
                                            "src": `${m_asset_path}/rose_and_headline.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.zIndex = '100';
                                            }
                                        });

                                        // "Use the words in your speech" - text:--
                                        mArtBox_evnt.add_svg({
                                            "w": `30vw`,
                                            "h": `5vh`,
                                            "x": 16,
                                            "y": 55,
                                            "e": mE,
                                            "src": `${m_asset_path}/use_the_words_text.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                mArtBox_evnt.add_animation({
                                                    "e": v.e,
                                                    "type": "animate__slideInUp"
                                                });
                                                v.e.style.zIndex = '100';
                                            }
                                        });

                                        // Words in quad:--
                                        mArtBox_evnt.add_svg({
                                            "w": `40vw`,
                                            "h": `10vh`,
                                            "x": 16,
                                            "y": 70,
                                            "e": mE,
                                            "src": `${m_asset_path}/words_in_quad.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.zIndex = '100';
                                            }
                                        });

                                        // Words in bilateral:--
                                        mArtBox_evnt.add_svg({
                                            "w": `20vw`,
                                            "h": `10vh`,
                                            "x": 53,
                                            "y": 70,
                                            "e": mE,
                                            "src": `${m_asset_path}/words_in_bilateral.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.zIndex = '100';
                                            }
                                        });

                                        // Record button:--
                                        mArtBox_evnt.add_svg({
                                            "w": `10vw`,
                                            "h": `6vh`,
                                            "x": 75,
                                            "y": 74,
                                            "e": mE,
                                            "src": `${m_asset_path}/rec.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                mArtBox_evnt.add_animation({
                                                    "e": v.e,
                                                    "type": "animate__fadeIn"
                                                });
                                                v.e.style.zIndex = '100';
                                            },
                                            "onClick": (v = {}) => {
                                                // mSendCB(`on_scr_end`, {});
                                            }
                                        });
                                    }
                                });

                            };

                            // on_scr_end..
                            let on_scr_end = () => {
                                //send cb..
                                mSendCB(`on_scr_end`, {});
                            };

                            mSet(mScr);
                        }
                    },


                    // Screen-5 -----------------------------
                    {
                        "name": "Screen 5",
                        "key": "scr_5",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen


                            // mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {
                                // BG & Next Btn:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "x": 0,
                                    "y": 0,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_blue_white.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({ // Next btn
                                            "w": `7vw`,
                                            "h": `5vh`,
                                            "x": 80,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/next_btn.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.cursor = 'pointer';
                                            },
                                            "onClick": (v = {}) => {
                                                on_scr_end();
                                            }
                                        });
                                    }
                                });//--------

                                // Replied text about rose:--
                                mArtBox_evnt.add_svg({
                                    "w": `66vw`,
                                    "h": `30vh`,
                                    "x": 17,
                                    "y": 20,
                                    "e": mE,
                                    "src": `${m_asset_path}/replied_text_about_rose.svg`
                                });//-------

                                // Missing Words:--
                                mArtBox_evnt.add_svg({//Missing words - text
                                    "w": `15vw`,
                                    "h": `4vh`,
                                    "x": 17,
                                    "y": 60,
                                    "e": mE,
                                    "src": `${m_asset_path}/missing_words_text.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.cursor = 'pointer';
                                    },
                                    "onClick": (v = {}) => {
                                        on_scr_end();
                                    }
                                });

                                mArtBox_evnt.add_svg({//first class red
                                    "w": `20vw`,
                                    "h": `8vh`,
                                    "x": 20,
                                    "y": 70,
                                    "e": mE,
                                    "src": `${m_asset_path}/first_class_red.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.cursor = 'pointer';
                                    },
                                    "onClick": (v = {}) => {
                                        mArtBox_evnt.add_svg({//toolkit - first class
                                            "w": `12vw`,
                                            "h": `8vh`,
                                            "x": 25,
                                            "y": 76,
                                            "e": mE,
                                            "src": `${m_asset_path}/toolkit_first_class.svg`
                                        });
                                    }
                                });

                                mArtBox_evnt.add_svg({//shabby red
                                    "w": `20vw`,
                                    "h": `8vh`,
                                    "x": 50,
                                    "y": 70,
                                    "e": mE,
                                    "src": `${m_asset_path}/shabby_red.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.cursor = 'pointer';
                                    },
                                    "onClick": (v = {}) => {
                                        mArtBox_evnt.add_svg({// toolkit - shabby red
                                            "w": `12vw`,
                                            "h": `8vh`,
                                            "x": 55,
                                            "y": 76,
                                            "e": mE,
                                            "src": `${m_asset_path}/toolkit_shabby.svg`
                                        });
                                    }
                                });
                                //------------|

                                // on_scr_end..
                                let on_scr_end = () => {
                                    //send cb..
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-6 -----------------------------
                    {
                        "name": "Screen 6",
                        "key": "scr_6",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                // BG & Next btn:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/skills_progress.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({ // Next btn
                                            "w": `7vw`,
                                            "h": `5vh`,
                                            "x": 80,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/next_btn.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.cursor = 'pointer';
                                            },
                                            "onClick": (v = {}) => {
                                                congrats();
                                            }
                                        });
                                    }
                                });//------

                                let congrats = () => {
                                    // BG & Next Btn:--
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/bg_blue_white.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            mArtBox_evnt.add_svg({ // Next btn
                                                "w": `7vw`,
                                                "h": `5vh`,
                                                "x": 80,
                                                "y": 82,
                                                "e": mE,
                                                "src": `${m_asset_path}/next_btn.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = 'pointer';
                                                },
                                                "onClick": (v = {}) => {
                                                    on_scr_end();
                                                }
                                            });
                                        }
                                    });//--------

                                    // Congratulations:--
                                    mArtBox_evnt.add_svg({
                                        "w": `55vw`,
                                        "h": `65vh`,
                                        "x": 23,
                                        "y": 20,
                                        "e": mE,
                                        "src": `${m_asset_path}/congratulations.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            mArtBox_evnt.add_animation({
                                                "e": v.e,
                                                "type": "animate__bounceIn"
                                            });
                                        }
                                    });//-----
                                }//---------|

                                // on_scr_end..
                                let on_scr_end = () => {
                                    //send cb..
                                    mSendCB(`on_scr_end`, {});
                                };
                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-7 -----------------------------
                    {
                        "name": "Screen 7",
                        "key": "scr_7",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                // Dashboard:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/dashboard.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_animation({
                                            "e": v.e,
                                            "type": "animate__fadeIn"
                                        });//----

                                        mArtBox_evnt.add_svg({ // Next btn
                                            "w": `7vw`,
                                            "h": `4.5vh`,
                                            "x": 88,
                                            "y": 88,
                                            "e": mE,
                                            "src": `${m_asset_path}/next_btn.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.cursor = 'pointer';
                                            },
                                            "onClick": (v = {}) => {
                                                loading();

                                            }
                                        });//-----
                                    }
                                });

                                // BG lightblue - loading:--
                                let loading = () => {
                                    mArtBox_evnt.add_svg({
                                        "w": `100vw`,
                                        "h": `100vh`,
                                        "x": 0,
                                        "y": 0,
                                        "e": mE,
                                        "src": `${m_asset_path}/bg_lightblue.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            // loading:--
                                            mArtBox_evnt.add_svg({
                                                "w": `16vw`,
                                                "h": `16vw`,
                                                "x": 42,
                                                "y": 30,
                                                "e": mE,
                                                "src": `${m_asset_path}/loading_1.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    setTimeout(() => {
                                                        anime({
                                                            targets: v.e,
                                                            rotate: 360,
                                                            duration: 2000,
                                                            loop: true,
                                                            easing: 'linear'
                                                        })
                                                    }, 100);

                                                    setTimeout(() => {
                                                        anime({
                                                            targets: v.e,
                                                            opacity: 0,
                                                            duration: 1000,
                                                            easing: 'linear'
                                                        })
                                                        // CB:-
                                                        setTimeout(() => {
                                                            mSendCB(`on_scr_end`, {});
                                                        }, 500);
                                                    }, 3000);
                                                }
                                            });//-----
                                        }
                                    });
                                };//------

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-8 -----------------------------
                    {
                        "name": "Screen 8",
                        "key": "scr_8",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                // BG lightblue designed:--
                                mArtBox_evnt.add_svg({//1
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_lightblue_designed_1.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // BG white:--
                                        mArtBox_evnt.add_svg({
                                            "w": `82vw`,
                                            "h": `82vh`,
                                            "x": 9,
                                            "y": 9,
                                            "e": mE,
                                            "src": `${m_asset_path}/bg_white.svg`
                                        });
                                    }
                                });

                                // Countdown length:--
                                mArtBox_evnt.add_svg({
                                    "w": `75vw`,
                                    "h": `2vh`,
                                    "x": 12,
                                    "y": 16,
                                    "e": mE,
                                    "src": `${m_asset_path}/countdown_length.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '100';
                                        v.e.style.opacity = '0';
                                        setTimeout(() => {
                                            v.e.style.opacity = 1;
                                            anime({
                                                targets: v.e,
                                                width: ['0%', '100%'],
                                                duration: 7000,
                                                easing: 'easeInOutQuad'
                                            });

                                            setTimeout(() => {
                                                on_scr_end();
                                            }, 7000);
                                        }, 6000);
                                    }
                                });

                                // Narrate the video in 2 mins:--
                                mArtBox_evnt.add_svg({
                                    "w": `70vw`,
                                    "h": `5vh`,
                                    "x": 15,
                                    "y": 20,
                                    "e": mE,
                                    "src": `${m_asset_path}/narrate_the_video_text.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '100';
                                    }
                                });

                                // Video:--
                                mArtBox_evnt.add_svg({
                                    "w": `50vw`,
                                    "h": `38vh`,
                                    "x": 18,
                                    "y": 28,
                                    "e": mE,
                                    "src": `${m_asset_path}/video.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '101';
                                        setTimeout(() => {
                                            anime({
                                                targets: v.e,
                                                translateX: 300,
                                                scaleX: '0.6',
                                                easing: 'easeInOutQuad'
                                            })
                                        }, 5000);
                                    }
                                });

                                // Speak in pot:--
                                mArtBox_evnt.add_svg({
                                    "w": `12vw`,
                                    "h": `13vw`,
                                    "x": 71,
                                    "y": 35,
                                    "e": mE,
                                    "src": `${m_asset_path}/speak_in_pot.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '100';
                                        setTimeout(() => {
                                            anime({
                                                targets: v.e,
                                                opacity: 0,
                                                easing: 'easeInOutQuad'
                                            })
                                        }, 5100);
                                    }
                                });

                                // "Use the words in your speech" - text:--
                                mArtBox_evnt.add_svg({
                                    "w": `31vw`,
                                    "h": `5vh`,
                                    "x": 15,
                                    "y": 68,
                                    "e": mE,
                                    "src": `${m_asset_path}/use_the_words_text.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '100';
                                        setTimeout(() => {
                                            anime({
                                                targets: v.e,
                                                translateY: -50,
                                                easing: 'easeInOutQuad'
                                            })
                                        }, 5100);
                                    }
                                });

                                // Words in triad - lightpink:--
                                mArtBox_evnt.add_svg({
                                    "w": `60vw`,
                                    "h": `5vh`,
                                    "x": 15,
                                    "y": 78,
                                    "e": mE,
                                    "src": `${m_asset_path}/words_in_triad_lightpink.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '1000';
                                    }
                                });

                                // Record button:--
                                mArtBox_evnt.add_svg({
                                    "w": `10vw`,
                                    "h": `6vh`,
                                    "x": 76,
                                    "y": 77,
                                    "e": mE,
                                    "src": `${m_asset_path}/rec.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.zIndex = '100';
                                        v.e.style.opacity = "0";
                                        setTimeout(() => {
                                            v.e.style.opacity = "1";
                                            mArtBox_evnt.add_animation({
                                                "e": v.e,
                                                "type": "animate__fadeIn"
                                            });
                                        }, 6000);
                                    },
                                    "onClick": (v = {}) => {
                                        // mSendCB(`on_scr_end`, {});
                                    }
                                });

                                // on_scr_end..
                                let on_scr_end = () => {
                                    //send cb..
                                    mSendCB(`on_scr_end`, {});
                                };
                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-9 -----------------------------
                    {
                        "name": "Screen 9",
                        "key": "scr_9",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                // BG lightblue - loading:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_lightblue.svg`
                                }, {
                                    "onLoad": (v = {}) => {

                                    }
                                });
                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-10 -----------------------------
                    {
                        "name": "Screen 10",
                        "key": "scr_10",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                // BG lightblue - loading:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_lightblue.svg`
                                }, {
                                    "onLoad": (v = {}) => {

                                    }
                                });
                            };
                            mSet(mScr);
                        }
                    },

                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k); // Index number of the screen list
                if (mIdx == -1) {
                    throw `err: [k = ${k}] is not available..`;
                    return; //Stop
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);
            }

        }

    };

    //set..
    // mDiv.innerHTML = "Content";



    // //mStart..
    let mStart = (mE) => {

        let scr_10 = () => {
            mDta_main.screens.set(`scr_10`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {

                        },
                    }
                }
            });
        };

        let scr_9 = () => {
            mDta_main.screens.set(`scr_9`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_10()
                        },
                    }
                }
            });
        };

        // let scr_8 = () => {
        //     mDta_main.screens.set(`scr_8`, {
        //         "e": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..
        //             //callback..
        //             "cb": {
        //                 "on_scr_end": (p = {}) => {
        //                     scr_9()
        //                 },
        //             }
        //         }
        //     });
        // };

        let scr_7 = () => {
            mDta_main.screens.set(`scr_7`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_8()
                        },
                    }
                }
            });
        };

        let scr_6 = () => {
            mDta_main.screens.set(`scr_6`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_7();
                        },
                    }
                }
            });
        };

        let scr_5 = () => {
            mDta_main.screens.set(`scr_5`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_6();
                        },
                    }
                }
            });
        };

        let scr_4 = () => {
            mDta_main.screens.set(`scr_4`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_5();
                        },
                    }
                }
            });
        };

        let scr_3 = () => {
            mDta_main.screens.set(`scr_3`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_4();
                        },
                    }
                }
            });
        };

        let scr_2_2 = () => {
            mDta_main.screens.set(`scr_2_2`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            if (p.test == "sound") {
                                scr_2();
                            }
                            else {
                                scr_3();
                            }
                        },
                    }
                }
            });
        };

        let scr_2_1 = () => {
            mDta_main.screens.set(`scr_2_1`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            if (p.test == "mic") {
                                scr_2();
                            }
                            else {
                                scr_3();
                            }
                        },
                    }
                }
            });
        };

        let scr_2 = () => {
            mDta_main.screens.set(`scr_2`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            console.log(p.test);
                            if (p.test == "mic") {
                                scr_2_1();
                            }
                            else if (p.test == "sound") {
                                scr_2_2();
                            }
                            else {
                                scr_3();
                            }
                        },
                    }
                }
            });
        };

        mDta_main.screens.set(`scr_8`, {
            "e": mE, //Html-Element
            "value": {
                //here you can assign your variable based on your requirements..

                //callback..
                "cb": {
                    "on_scr_end": (p = {}) => {
                        scr_9();
                    },
                }

            }
        });

    };

    mStart(mScene);

};

mGameRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",

    }
}, document.body);

