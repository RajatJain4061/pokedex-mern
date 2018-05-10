import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import imgLogo from '../../../../src/images/pokeball.png';
import imgIcon1 from '../../../../src/images/icon1.png';
import imgIcon5 from '../../../../src/images/icon5.png';
import imgIcon7 from '../../../../src/images/icon7.png';
import imgUser from '../../../../src/images/user.png';
// import '../../../../App.css';
// Import Style
import styles from '../../../../App.css';

console.log(styles);

class Dashboard extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className={styles['App']}>
        <nav
          className={styles['page-sidebar']}
          data-pages="sidebar"
          style={{ transform: 'translate3d(0px, 0px, 0px)' }}
        >
          <div className={styles['sidebar-header']}>
            <div className={styles['sidebar-header-controls']}>
              <button
                type="button"
                className={classNames(styles['btn'], styles['btn-link'], styles['hidden-md-down'])}
                data-toggle-pin="sidebar">
                <img src={imgLogo} style={{ width: "55px" }} alt="" />
              </button>
            </div>
          </div>
          <div className={styles['sidebar-menu']}>
            <div className={classNames(styles['scroll-wrapper'], styles['menu-items'])} style={{ position: 'relative' }}>
              <ul
                className={classNames(styles['menu-items'], styles['scroll-content'], styles['scroll-scrolly_visible'])}
                style={{
                  height: 'auto',
                  marginBottom: '0px',
                  marginRight: '0px',
                  maxHeight: '660px',
                }}>
                <li className={styles['m-t-30']}>
                  <a href="javascript:void(0)">
                    <span className={styles['icon-thumbnail']}>
                      <img src={imgIcon1} alt="" />
                    </span>
                  </a>
                </li>
                <li className="">
                  <a href="javascript:void(0)">
                    <span className={classNames(styles['bg-success'], styles['icon-thumbnail'])}>
                      <img src={imgIcon5} alt="" />
                    </span>
                  </a>
                </li>
                <li className="">
                  <a href="javascript:void(0)">
                    <span className={classNames(styles['icon-thumbnail'])}>
                      <img src={imgIcon7} alt="" />
                    </span>
                  </a>
                </li>
                <li className="">
                  <a href="javascript:void(0)">
                    <span className={styles['icon-thumbnail']}>
                      <img src={imgUser} alt="" />
                    </span>
                  </a>
                </li>
              </ul>
              <div className={classNames(styles['scroll-element'], styles['scroll-x'], styles['scroll-scrolly_visible'])}>
                <div className={styles['scroll-element_outer']}>
                  <div className={styles['scroll-element_size']} />
                  <div className={styles['scroll-element_trackr']} />
                  <div className={styles['scroll-bar']} style={{ width: '89px' }} />
                </div>
              </div>
              <div className={classNames(styles['scroll-element'], styles['scroll-y'], styles['scroll-scrolly_visible'])}>
                <div className={styles['scroll-element_outer']}>
                  <div className={styles['scroll-element_size']} />
                  <div className={styles['scroll-element_track']} />
                  <div
                    className={styles['scroll-bar']}
                    style={{ height: '517px', top: '100.52px' }}
                  />
                </div>
              </div>
            </div>
            <div className={styles['clearfix']} />
          </div>
        </nav>
        <div
          className={styles['page-container']}
          style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
          <div className={styles['header']}>
            <a
              href="javascript:void(0)"
              className={classNames(styles['btn-link'], styles['toggle-sidebar'], styles['hidden-lg-up'])}
              data-toggle="sidebar"
            >
              <i className="fa fa-bars" />
            </a>
            <div className={styles['containernew']}>
              <div className={styles['row']}>
                <div className={classNames(styles['col-lg-6'], styles['col-md-6'], styles['col-sm-6'], styles['col-xs-12'], styles['rightspace'])}>
                  <div className={styles['staffcont']}>
                    <h3>Pokedex</h3>
                  </div>
                </div>
                <div className={classNames(styles['col-lg-6'], styles['col-md-6'], styles['col-sm-6'], styles['hidedivbox'])}>
                  <div className={styles['currenttext']}>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['page-content-wrapper']}>
            <div className={styles['containernew']}>
              <div className={styles['row']}>
                <div className={classNames(styles['col-md-12'], styles['showmobile'])}>
                  <div className={styles['currenttext']}>
                  </div>
                </div>
              </div>
              <div className={styles['row']}>
                <div className={classNames(styles['col-lg-6'], styles['col-md-6'], styles['col-sm-6'])}>

                </div>
                <div className={classNames(styles['col-lg-6'], styles['col-md-6'], styles['col-sm-6'])}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
