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

                                                    let logoText = document.createElement('h1');
                                                    logoText.innerText = "Logo"
                                                    logoText.style.color = '#000';
                                                    logoText.style.fontSize = '3vh';
                                                    logoText.style.fontWeight = '600';
                                                    logoText.style.position = 'absolute';
                                                    logoText.style.top = '40%';
                                                    logoText.style.left = '30%';
                                                    logoText.style.zIndex = '100';

                                                    logoDiv.appendChild(logoText);
                                                    let value = v.e;
                                                    value.appendChild(logoDiv);
                                                }, 3000);
                                            }
                                        });

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
                                        }, 3800);
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
                                                "type":"animate__zoomOut"
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
                                                "type":"animate__fadeInTopLeft"
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
                                                        "type":"animate__fadeIn"
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

                            };
                            // on_scr_end..
                            let on_scr_end = () => {
                                //send cb..
                                mSendCB(`on_scr_end`, {});
                            };

                            mSet(mScr);
                        }
                    },


                    // // Screen-5 -----------------------------
                    // {
                    //     "name": "Screen 5",
                    //     "key": "scr_5",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset the screen


                    //         // mSendCB..
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb")) {
                    //                 if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                     v["value"]["cb"][cb_name](p);
                    //                 }
                    //             }
                    //         };

                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;

                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             // BG:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `5.3vw`,
                    //                         "h": `6vh`,
                    //                         "x": 4,
                    //                         "y": 76,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/little_square.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                         }
                    //                     });
                    //                 }
                    //             });

                    //             // Garland of positive and negative(except one negative sign and two positive sign):--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "x": -2,
                    //                 "y": -5,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/garland_2_pos_1_neg_less.svg`
                    //             });

                    //             mArtBox_evnt.add_svg({ //one neg sign:- to move down
                    //                 "w": `5vw`,
                    //                 "h": `2vh`,
                    //                 "x": 20,
                    //                 "y": 84,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/neg_sign.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     setTimeout(() => {
                    //                         anime({
                    //                             targets: v.e,
                    //                             translateX: [-110, 0],
                    //                             translateY: [-245, 0],
                    //                             duration: 500,
                    //                             easing: 'linear'
                    //                         });
                    //                     }, 2500);

                    //                 }
                    //             });//------

                    //             mArtBox_evnt.add_svg({ //one neg sign:- to move above
                    //                 "w": `4.5vw`,
                    //                 "h": `2vh`,
                    //                 "x": 20,
                    //                 "y": 84,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/neg_sign.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     setTimeout(() => {
                    //                         anime({
                    //                             targets: v.e,
                    //                             translateX: '42.5vw',
                    //                             translateY: -120,
                    //                             duration: 500,
                    //                             easing: 'linear'
                    //                         });
                    //                     }, 2500);

                    //                 }
                    //             });//--------

                    //             mArtBox_evnt.add_svg({ //one pos sign:- to move down
                    //                 "w": `4.5vw`,
                    //                 "h": `5.5vh`,
                    //                 "x": 70,
                    //                 "y": 19,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/pos_sign.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     setTimeout(() => {
                    //                         anime({
                    //                             targets: v.e,
                    //                             translateX: '22vw',
                    //                             translateY: '30vh',
                    //                             duration: 500,
                    //                             easing: 'linear'
                    //                         });
                    //                     }, 2500);

                    //                     let changePosition = () => {
                    //                         anime({
                    //                             targets: v.e,
                    //                             translateX: '-22vw',
                    //                             translateY: '-30vh',
                    //                             duration: 500,
                    //                             easing: 'linear'
                    //                         });
                    //                     }
                    //                 }
                    //             });//-------

                    //             mArtBox_evnt.add_svg({ //one pos sign:- to move above
                    //                 "w": `4.5vw`,
                    //                 "h": `5.5vh`,
                    //                 "x": 92,
                    //                 "y": 52,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/pos_sign.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     setTimeout(() => {
                    //                         anime({
                    //                             targets: v.e,
                    //                             translateX: '-20vw',
                    //                             translateY: '-30vh',
                    //                             duration: 500,
                    //                             easing: 'linear'
                    //                         });
                    //                     }, 2500);

                    //                     let changePosition = () => {
                    //                         anime({
                    //                             targets: v.e,
                    //                             translateX: '20vw',
                    //                             translateY: '30vh',
                    //                             duration: 500,
                    //                             easing: 'linear'
                    //                         });
                    //                     }
                    //                 }
                    //             }); //-------

                    //             // Quiz:--
                    //             mArtBox_evnt.add_svg({ // Question container
                    //                 "w": `41vw`,
                    //                 "h": `18vh`,
                    //                 "x": 31,
                    //                 "y": 28,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/ques_container.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     v.e.style.opacity = "0";
                    //                     v.e.style.zIndex = "0";
                    //                     setTimeout(() => {
                    //                         anime({
                    //                             opacity: 1,
                    //                             targets: v.e,
                    //                             scale: [110, 1],
                    //                             duration: 1000,
                    //                             easing: 'spring(1, 80, 10, 0)',
                    //                         });
                    //                     }, 0);

                    //                     mArtBox_evnt.add_svg({ // Ques. text
                    //                         "w": `25vw`,
                    //                         "h": `12vh`,
                    //                         "x": 40,
                    //                         "y": 33,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/ques_text.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             v.e.style.opacity = "0";
                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     opacity: 1,
                    //                                     targets: v.e,
                    //                                     duration: 600,
                    //                                     easing: 'linear'
                    //                                 });
                    //                             }, 1500);
                    //                         }
                    //                     });//-----


                    //                 }
                    //             });//-----

                    //             setTimeout(() => { // Option Circle 1
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `13vw`,
                    //                     "h": `20vh`,
                    //                     "x": 32,
                    //                     "y": 57,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/option_circle_1.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         v.e.style.opacity = "0";
                    //                         v.e.style.cursor = "pointer";
                    //                         v.e.style.zIndex = "10";
                    //                         setTimeout(() => {
                    //                             anime({
                    //                                 opacity: 1,
                    //                                 targets: v.e,
                    //                                 duration: 600,
                    //                                 easing: 'linear'
                    //                             });
                    //                         }, 100);
                    //                         setTimeout(() => {
                    //                             mArtBox_evnt.add_svg({
                    //                                 "w": `4.5vw`,
                    //                                 "h": `5.5vh`,
                    //                                 "x": 36.5,
                    //                                 "y": 65,
                    //                                 "e": mE,
                    //                                 "src": `${m_asset_path}/pos_sign.svg`
                    //                             }, {
                    //                                 "onLoad": (v = {}) => {
                    //                                     v.e.style.opacity = "0";
                    //                                     anime({
                    //                                         opacity: 1,
                    //                                         targets: v.e,
                    //                                         duration: 600,
                    //                                         easing: 'linear'
                    //                                     });
                    //                                 }
                    //                             });
                    //                         }, 1000);//------
                    //                     },
                    //                     "onClick": (v = {}) => {
                    //                         // changePosition();

                    //                         mArtBox_evnt.add_svg({
                    //                             "w": `13vw`,
                    //                             "h": `20vh`,
                    //                             "x": 32,
                    //                             "y": 57,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/green+.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 v.e.style.disabled = "true";
                    //                                 v.e.style.zIndex = "100";
                    //                             }
                    //                         });

                    //                         setTimeout(() => {
                    //                             //send cb..
                    //                             mSendCB(`on_scr_end`, { "scr": true });
                    //                         }, 500);
                    //                     }
                    //                 });
                    //             }, 2000);//-----

                    //             setTimeout(() => { // Option Circle 2
                    //                 mArtBox_evnt.add_svg({
                    //                     "w": `13vw`,
                    //                     "h": `20vh`,
                    //                     "x": 58,
                    //                     "y": 57,
                    //                     "e": mE,
                    //                     "src": `${m_asset_path}/option_circle_2.svg`
                    //                 }, {
                    //                     "onLoad": (v = {}) => {
                    //                         v.e.style.opacity = "0";
                    //                         v.e.style.cursor = "pointer";
                    //                         setTimeout(() => {
                    //                             anime({
                    //                                 opacity: 1,
                    //                                 targets: v.e,
                    //                                 duration: 600,
                    //                                 easing: 'linear'
                    //                             });
                    //                         }, 100);
                    //                     },
                    //                     "onClick": (v = {}) => {
                    //                         // changePosition();

                    //                         mArtBox_evnt.add_svg({
                    //                             "w": `13vw`,
                    //                             "h": `20vh`,
                    //                             "x": 58,
                    //                             "y": 57,
                    //                             "e": mE,
                    //                             "src": `${m_asset_path}/red-.svg`
                    //                         }, {
                    //                             "onLoad": (v = {}) => {
                    //                                 v.e.style.disabled = "true";
                    //                             }
                    //                         });

                    //                         setTimeout(() => {
                    //                             //send cb..
                    //                             mSendCB(`on_scr_end`, { "scr": false });
                    //                         }, 500);
                    //                     }
                    //                 });
                    //             }, 2000);//------

                    //             //------------|

                    //         };

                    //         mSet(mScr);
                    //     }
                    // },

                    // // Screen-5_1 -----------------------------
                    // {
                    //     "name": "Screen 5_1",
                    //     "key": "scr_5_1",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset the screen

                    //         //mSendCB..
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb")) {
                    //                 if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                     v["value"]["cb"][cb_name](p);
                    //                 }
                    //             }
                    //         };


                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             // BG:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `5.3vw`,
                    //                         "h": `6vh`,
                    //                         "x": 4,
                    //                         "y": 76,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/little_square.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                         }
                    //                     });
                    //                 }
                    //             });
                    //             //------

                    //             // Garland of positive and negative(except one negative sign):--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "x": 0,
                    //                 "y": 0,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/garland_2_neg_less.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({ //one neg sign:- to move top left
                    //                         "w": `5vw`,
                    //                         "h": `2vh`,
                    //                         "x": 12,
                    //                         "y": 44,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/neg_sign.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             anime({
                    //                                 targets: v.e,
                    //                                 translateX: -80,
                    //                                 translateY: -120,
                    //                                 duration: 50,
                    //                                 easing: 'spring(1, 80, 10, 0)'
                    //                             });
                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     targets: v.e,
                    //                                     translateX: [-80, 0],
                    //                                     translateY: [-120, 0],
                    //                                     duration: 50,
                    //                                     delay: 0,
                    //                                     easing: 'spring(1, 80, 10, 0)'
                    //                                 });
                    //                             }, 300);

                    //                         }
                    //                     });//------

                    //                     mArtBox_evnt.add_svg({ //one neg sign:- to move bottom
                    //                         "w": `5vw`,
                    //                         "h": `2vh`,
                    //                         "x": 20,
                    //                         "y": 81.5,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/neg_sign.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             anime({
                    //                                 targets: v.e,
                    //                                 translateX: -80,
                    //                                 translateY: 120,
                    //                                 duration: 80,
                    //                                 delay: 0,
                    //                                 easing: 'spring(1, 80, 6, 1)'
                    //                             });
                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     targets: v.e,
                    //                                     translateX: [-80, 0],
                    //                                     translateY: [120, 0],
                    //                                     duration: 80,
                    //                                     delay: 0,
                    //                                     easing: 'spring(1, 80, 6, 1)'
                    //                                 });
                    //                             }, 300);

                    //                         }
                    //                     });//--------
                    //                 }
                    //             });

                    //             // Congrats Plate:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `72vw`,
                    //                 "h": `100vh`,
                    //                 "x": 16,
                    //                 "y": 0,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/particles.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     // v.e.style.zIndex = "100";
                    //                     mArtBox_evnt.add_animation({
                    //                         "e": v.e,
                    //                         "type": "animate__heartBeat"
                    //                     });
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `40vw`,
                    //                         "h": `40vh`,
                    //                         "x": 30,
                    //                         "y": 30,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/result_bg_plate.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             mArtBox_evnt.add_animation({
                    //                                 "e": v.e,
                    //                                 "type": "animate__heartBeat"
                    //                             });
                    //                             mArtBox_evnt.add_svg({
                    //                                 "w": `30vw`,
                    //                                 "h": `30vh`,
                    //                                 "x": 36,
                    //                                 "y": 35,
                    //                                 "e": mE,
                    //                                 "src": `${m_asset_path}/congrats_text.svg`
                    //                             }, {
                    //                                 "onLoad": (v = {}) => {

                    //                                 }
                    //                             });
                    //                         }
                    //                     });


                    //                 }
                    //             });


                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 //send cb..
                    //                 mSendCB(`on_scr_end`, {});
                    //             };
                    //         };
                    //         mSet(mScr);
                    //     }
                    // },

                    // // Screen-5_2 -----------------------------
                    // {
                    //     "name": "Screen 5_2",
                    //     "key": "scr_5_2",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         v["e"].innerHTML = ``; //reset the screen

                    //         //mSendCB..
                    //         let mSendCB = (cb_name, p = {}) => {
                    //             if (v["value"].hasOwnProperty("cb")) {
                    //                 if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                    //                     v["value"]["cb"][cb_name](p);
                    //                 }
                    //             }
                    //         };


                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         v["e"].appendChild(mScr);
                    //         mScr.style.height = `100vh`;
                    //         mScr.style.width = `100%`;
                    //         mScr.style.overflow = `hidden`;


                    //         //set..
                    //         let mSet = (mE = document.body) => {


                    //             // BG:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/bg.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `5.3vw`,
                    //                         "h": `6vh`,
                    //                         "x": 4,
                    //                         "y": 76,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/little_square.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                         }
                    //                     });
                    //                 }
                    //             });
                    //             //------

                    //             // Garland of positive and negative(except two negative sign):--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `100vw`,
                    //                 "h": `100vh`,
                    //                 "x": 0,
                    //                 "y": 0,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/garland_2_neg_less.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_svg({ //one neg sign:- to move top left
                    //                         "w": `5vw`,
                    //                         "h": `2vh`,
                    //                         "x": 12,
                    //                         "y": 44,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/neg_sign.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             anime({
                    //                                 targets: v.e,
                    //                                 translateX: -80,
                    //                                 translateY: -120,
                    //                                 duration: 50,
                    //                                 easing: 'spring(1, 80, 10, 0)'
                    //                             });
                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     targets: v.e,
                    //                                     translateX: [-80, 0],
                    //                                     translateY: [-120, 0],
                    //                                     duration: 50,
                    //                                     delay: 0,
                    //                                     easing: 'spring(1, 80, 10, 0)'
                    //                                 });
                    //                             }, 300);

                    //                         }
                    //                     });//------

                    //                     mArtBox_evnt.add_svg({ //one neg sign:- to move bottom
                    //                         "w": `5vw`,
                    //                         "h": `2vh`,
                    //                         "x": 20,
                    //                         "y": 81.5,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/neg_sign.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {
                    //                             anime({
                    //                                 targets: v.e,
                    //                                 translateX: -80,
                    //                                 translateY: 120,
                    //                                 duration: 80,
                    //                                 delay: 0,
                    //                                 easing: 'spring(1, 80, 6, 1)'
                    //                             });
                    //                             setTimeout(() => {
                    //                                 anime({
                    //                                     targets: v.e,
                    //                                     translateX: [-80, 0],
                    //                                     translateY: [120, 0],
                    //                                     duration: 80,
                    //                                     delay: 0,
                    //                                     easing: 'spring(1, 80, 6, 1)'
                    //                                 });
                    //                             }, 300);

                    //                         }
                    //                     });//--------
                    //                 }
                    //             });

                    //             // Try Again Plate:--
                    //             mArtBox_evnt.add_svg({
                    //                 "w": `40vw`,
                    //                 "h": `40vh`,
                    //                 "x": 30,
                    //                 "y": 30,
                    //                 "e": mE,
                    //                 "src": `${m_asset_path}/result_bg_plate.svg`
                    //             }, {
                    //                 "onLoad": (v = {}) => {
                    //                     mArtBox_evnt.add_animation({
                    //                         "e": v.e,
                    //                         "type": "animate__heartBeat"
                    //                     });
                    //                     mArtBox_evnt.add_svg({
                    //                         "w": `30vw`,
                    //                         "h": `30vh`,
                    //                         "x": 36,
                    //                         "y": 35.5,
                    //                         "e": mE,
                    //                         "src": `${m_asset_path}/try_again_text.svg`
                    //                     }, {
                    //                         "onLoad": (v = {}) => {

                    //                         }
                    //                     });
                    //                 }
                    //             });


                    //             // on_scr_end..
                    //             let on_scr_end = () => {
                    //                 //send cb..
                    //                 mSendCB(`on_scr_end`, {});
                    //             };

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },

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
        let scr_5 = () => {
            mDta_main.screens.set(`scr_5`, {
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

        mDta_main.screens.set(`scr_3`, {
            "e": mE, //Html-Element
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

