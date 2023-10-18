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

                                // Splash 1 - Rotate:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/Loading-Screen-bg.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        setTimeout(() => {
                                            anime({
                                                targets: v.e,
                                                rotate: 100,
                                                scale: 5,
                                                easing: 'linear'
                                            })
                                        }, 100);

                                        mArtBox_evnt.add_svg({
                                            "w": `30vw`,
                                            "h": `30vw`,
                                            "x": 35,
                                            "y": 25,
                                            "e": mE,
                                            "src": `${m_asset_path}/loader.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    anime({
                                                        targets: v.e,
                                                        rotate: 180,
                                                        loop: true,
                                                        // scale: 2.5,
                                                        easing: 'linear'
                                                    })
                                                }, 100);

                                                // setTimeout(() => {
                                                //     let logoDiv = document.createElement('div');
                                                //     logoDiv.style.width = '15vh';
                                                //     logoDiv.style.height = '15vh';
                                                //     logoDiv.style.backgroundColor = 'white';
                                                //     logoDiv.style.borderRadius = '50px';
                                                //     logoDiv.style.position = 'absolute';
                                                //     logoDiv.style.top = '43%';
                                                //     logoDiv.style.left = '46%';
                                                //     logoDiv.style.zIndex = '10';
                                                //     logoDiv.style.transform = "rotate(25deg)";

                                                //     let logoText = document.createElement('h1');
                                                //     logoText.innerText = "Logo"
                                                //     logoText.style.color = '#000';
                                                //     logoText.style.fontSize = '3vh';
                                                //     logoText.style.fontWeight = '600';
                                                //     logoText.style.position = 'absolute';
                                                //     logoText.style.top = '40%';
                                                //     logoText.style.left = '30%';
                                                //     logoText.style.zIndex = '100';
                                                    
                                                //     logoDiv.appendChild(logoText);
                                                //     let value = v.e;
                                                //     value.appendChild(logoDiv);
                                                // }, 3000);
                                            }
                                        });

                                        setTimeout(() => {
                                            mArtBox_evnt.add_svg({
                                                "w": `100vw`,
                                                "h": `100vh`,
                                                "x": 0,
                                                "y": 0,
                                                "e": mE,
                                                "src": `${m_asset_path}/audio1.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `4vw`,
                                                        "h": `3vh`,
                                                        "x": 48,
                                                        "y": 64,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/Play & Pause.svg`
                                                    }, {
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.cursor = 'pointer';
                                                        },
                                                        "onClick": (v = {}) => {
                                                            on_scr_end();
                                                        }
                                                    });
                                                }
                                            });
                                        }, 3500);
                                    }
                                });

                                let on_scr_end = () => {
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    //Screen 2 -------------------
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

                                // Splash 1 - Rotate:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/audio2.svg`
                                });
                                setTimeout(() => {
                                        mArtBox_evnt.add_svg({
                                         on_scr_end
                                        }
                                    );
                                }, 3500);

                                let on_scr_end = () => {
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // screen - 3---------------------
                    {
                        "name": "Screen 3",
                        "key": "scr_3",
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

                                // Splash 1 - Rotate:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/audio3.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        setTimeout(() => {
                                            mArtBox_evnt.add_svg({
                                                "w": `100vw`,
                                                "h": `100vh`,
                                                "x": 0,
                                                "y": 0,
                                                "e": mE,
                                                "src": `${m_asset_path}/audio3.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `7vw`,
                                                        "h": `5vh`,
                                                        "x": 78,
                                                        "y": 84,
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
                                            });
                                        }, 100);
                                    }
                                });

                                let on_scr_end = () => {
                                    mSendCB(`on_scr_end`, {});
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen - 4 -----------------------------
                    {
                        "name": "Screen 4",
                        "key": "scr_4",
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

                                // Splash 1 - Rotate:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/audio5.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        setTimeout(() => {
                                            mArtBox_evnt.add_svg({
                                                "w": `100vw`,
                                                "h": `100vh`,
                                                "x": 0,
                                                "y": 0,
                                                "e": mE,
                                                "src": `${m_asset_path}/audio5.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `7vw`,
                                                        "h": `5vh`,
                                                        "x": 78,
                                                        "y": 84,
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
                                            });
                                        }, 100);
                                    }
                                });

                                let on_scr_end = () => {
                                    mSendCB(`on_scr_end`, {});
                                };
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

                                // Splash 1 - Rotate:--
                                mArtBox_evnt.add_svg({
                                    "w": `100vw`,
                                    "h": `100vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/Dashboard 5.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        setTimeout(() => {
                                            mArtBox_evnt.add_svg({
                                                "w": `100vw`,
                                                "h": `100vh`,
                                                "x": 0,
                                                "y": 0,
                                                "e": mE,
                                                "src": `${m_asset_path}/Dashboard 5.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `7vw`,
                                                        "h": `5vh`,
                                                        "x": 88,
                                                        "y": 86,
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
                                            });
                                        }, 100);
                                    }
                                });

                                let on_scr_end = () => {
                                    mSendCB(`on_scr_end`, {});
                                };
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

        let scr_5 = () => {
            mDta_main.screens.set(`scr_5`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            // console.log(p.scr);
                            if (p.scr == true) {
                                scr_5_1();
                            }
                            else if (p.scr == false) {
                                scr_5_2();
                            }
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

        let scr_2 = () => {
            mDta_main.screens.set(`scr_2`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_3();
                        },
                    }
                }
            });
        };

        mDta_main.screens.set(`scr_2`, {
            "e": mE, //Html-Element
            "value": {
                //here you can assign your variable based on your requirements..

                //callback..
                "cb": {
                    "on_scr_end": (p = {}) => {
                        // scr_2();
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

