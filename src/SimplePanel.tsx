import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import './module.css';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme();
  const styles = getStyles();

  const powerFlow = data.series
    .map((series) => series.fields.find((field) => field.type === 'number'))
    .map((field) => field?.values.get(field.values.length - 1));

  const powerFlowStyle = `status${powerFlow}`;

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={powerFlowStyle}
        width="100%"
        height="100%"
        viewBox="0 0 340 340"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
    <defs id="defs126">
        <marker id="marker6332" refX="0" refY="0" orient="auto" markerWidth="5" markerHeight="6" viewBox="0 0 5 6" preserveAspectRatio="xMidYMid" overflow="visible">
            <path d="m1 0-3 3h-2l3-3-3-3h2z" id="path6330" fill="context-stroke" fillRule="evenodd" stroke="none"/>
        </marker>
        <marker id="Arrow4" refX="0" refY="0" orient="auto" markerWidth="5" markerHeight="6" viewBox="0 0 5 6" preserveAspectRatio="xMidYMid" markerUnits="userSpaceOnUse" overflow="visible">
            <path d="m1 0-3 3h-2l3-3-3-3h2z" id="path1741" fill="context-stroke" fillRule="evenodd" stroke="none"/>
        </marker>
        <marker id="Sketch" refX="0" refY="0" orient="auto-start-reverse" markerWidth="7.6" markerHeight="6.7" viewBox="0 0 7.6 6.7" preserveAspectRatio="xMidYMid" overflow="visible">
            <path d="M-4.5-3.2-.7-.6l.6.5-2.4 1.3-2 1v.6l-.2.3.4-.4.3-.4L.7 0 0-.3l-1.8-.3L-3.6-2l-.7-.4-1.3-.2h2.2l.7 1 1.4.2L0-.5l1.6.5-2 1.2-2 1L-4 3" id="path22096" fill="none" stroke="context-stroke" strokeWidth=".4" strokeLinecap="round"/>
        </marker>
    </defs>
    <g id="Page-1" stroke="none" fill="none">
        <g id="flowchart" transform="translate(2 2)">
            <g id="grid-to-battery" transform="matrix(-.9896 0 0 1 243.6 163.2)" stroke="#97a5a7" strokeOpacity="1">
                <path id="battery-to-grid-line-3" d="M157.8 4.8H-8" stroke="#97a5a7" strokeOpacity="1" markerStart="url(#marker6332)" markerMid="url(#marker6332)" markerEnd="url(#marker6332)"/>
            </g>
            <g id="battery-to-grid" transform="matrix(.9896 0 0 1 92.4 163.2)">
                <path id="battery-to-grid-line" d="M157.8 4.8H-8" stroke="#97bd3f" strokeWidth="1" markerStart="url(#marker6332)" markerMid="url(#marker6332)" markerEnd="url(#marker6332)"/>
            </g>
            <g id="g28" transform="matrix(.99451 0 0 .99451 -1.5 131.5)" stroke="#97a5a7">
                <circle id="Oval" cx="36.7" cy="36.7" r="36.7"/>
                <g id="iconbig/wind/blue" transform="translate(12.4 13.3)">
                    <g id="grid" transform="translate(12.6 2.5)">
                        <g id="Group">
                            <path d="M0 12.6h23" id="Line-2"/>
                            <path d="M0 21h23" id="Line-2_1_"/>
                            <path d="M8 26.8 9 9.3" id="Line-2_3_"/>
                            <path d="m0 12.5 9-3.2" id="Line-2_4_"/>
                            <path d="m14 9.5 9 3" id="Line-2_5_"/>
                            <path d="M14.7 17.4 23 21" id="Line-2_6_"/>
                            <path d="m0 21 8.5-3.5" id="Line-2_7_"/>
                            <path d="M14 9.3 12 .1" id="Line-2_8_"/>
                            <path d="m9 9.3 3-9.2" id="Line-2_9_"/>
                            <path d="m4.2 35.4 14.3-.1" id="Line-2_10_"/>
                            <path d="m8.5 17.5 6.2-.1" id="Line-2_11_"/>
                            <path d="m8 26.8 7.4-.1" id="Line-2_12_"/>
                            <path d="M9 9.3h5" id="Line-2_13_"/>
                            <path d="m.7 42.7 7.3-16" id="Line-2_14_"/>
                            <path d="M.7 43.1 8 35.4" id="Line-2_15_"/>
                            <path d="m21.6 43-7.7-7.4" id="Line-2_16_"/>
                            <path d="M15.4 26.7 21.7 43" id="Line-2_17_"/>
                        </g>
                        <path d="M15.3 26.7 14.1 9.6" id="Line-2_2_"/>
                    </g>
                </g>
            </g>
            <g id="home" transform="translate(130.5 263.5) scale(1.02067)">
                <circle id="circle30" stroke="#009cbf" cx="36.7" cy="36.7" r="35.8"/>
                <g id="iconbig/house/blue" transform="translate(12.4 8.6)" fill="#0b9cbd">
                    <g id="Group-11" transform="translate(6.4 9.2)">
                        <path id="Fill-1" d="M19.4 1.2.4 13.4.1 11.4 17.9.1z"/>
                        <path id="Fill-3" d="M20 35.4 23.3 35.4 23.3 23.4 29.7 23.4 29.7 21.6 21.8 21.6 20.4 21.6 20 21.6z"/>
                        <path id="Fill-5" d="M6.3 17.5 15.8 17.5 15.8 13.4 6.3 13.4z"/>
                        <path id="Fill-7" d="M20.1 17.5 29.6 17.5 29.6 14.8 20.1 14.8z"/>
                        <path id="Fill-9" d="M6.1 29.7 15.6 29.7 15.6 21.6 6.1 21.6z"/>
                    </g>
                    <g id="Group-25" transform="translate(1.2 2.3)">
                        <path d="M11.5 24h9v-3.4h-9zm0-4h9v-2h-9zm9.4-2.7h-9.8c-.2 0-.3.1-.3.3v6.7c0 .2.1.4.3.4H21c.2 0 .4-.2.4-.4v-6.7c0-.2-.2-.3-.4-.3z" id="Fill-12"/>
                        <path d="M25.5 24h9v-2h-9zm0-2.6h9V18h-9zm9.4-4.1h-9.8c-.2 0-.4.1-.4.3v6.7c0 .2.2.4.4.4H35c.2 0 .4-.2.4-.4v-6.7c0-.2-.2-.3-.4-.3z" id="Fill-14"/>
                        <path d="M16.4 36.4h4.2v-3.5h-4.2zm-4.9 0h4.2v-3.5h-4.2zm0-4.2h4.2V29h-4.2zm5 0h4V29h-4Zm4.4-4h-9.8c-.2 0-.3.1-.3.3v8.2c0 .2.1.4.3.4H21c.2 0 .4-.2.4-.4v-8.2c0-.2-.2-.4-.4-.4z" id="Fill-15"/>
                        <path id="Fill-16" d="M42.1 13.4 27 3.7 27.4 3.1 42.5 12.8z"/>
                        <path d="M44.4 39.9h1v-3.3h-1zm-1.6 0h.9v-3.3h-1Zm-1.6 0h.9v-3.3h-1Zm-18-33.4h-.4L3.1 19.3c-.6.4-1.4.2-1.8-.4-.4-.6-.3-1.5.4-1.9L23 3.2 44.4 17c.3.2.5.5.6.9a1.3 1.3 0 0 1-1 1.6c-.4 0-.8 0-1.1-.2zM40.4 42h-5.1V28.5c0-.2-.2-.4-.4-.4h-9.8c-.2 0-.4.2-.4.4v13.4H5.6V18.5L23 7.3l17.4 11.2Zm-15 0h9.1v-13h-9ZM4 39.9h.9v-3.3h-1Zm-1.6 0h.9v-3.3h-1Zm-1.7 0h1v-3.3h-1Zm45-5.7c-.2 0-.4.2-.4.4v1.3h-.9v-1.3a.4.4 0 0 0-.7 0v1.3h-1v-1.3a.4.4 0 0 0-.6 0v1.3h-1V19l1.4.9a2 2 0 1 0 2.3-3.5l-21.6-14h-.4l-21.5 14A2 2 0 1 0 3.5 20L5 19v17h-1v-1.4a.4.4 0 0 0-.6 0v1.3h-1v-1.3a.4.4 0 0 0-.7 0v1.3H.7v-1.3a.4.4 0 0 0-.7 0v7.7a.4.4 0 0 0 .7 0v-1.7h1v1.7a.4.4 0 0 0 .7 0v-1.7h.9v1.7a.4.4 0 0 0 .7 0v-1.7h.9v2H41.2v-2h.9v1.7a.4.4 0 0 0 .7 0v-1.7h.9v1.7a.4.4 0 0 0 .7 0v-1.7h1v1.7a.4.4 0 0 0 .6 0v-7.7c0-.2-.1-.4-.3-.4z" id="Fill-17"/>
                        <path d="M29.5 3.4a.4.4 0 0 1-.3-.6L31 .3a.4.4 0 0 1 .6.3L30 3.2l-.4.2" id="Fill-18"/>
                        <path d="M32 5h-.2a.4.4 0 0 1 0-.5l1-1.5a.4.4 0 0 1 .5.4l-1 1.5c0 .1-.1.2-.3.2" id="Fill-19"/>
                        <path d="M34.4 6.5a.4.4 0 0 1-.3-.5l1.7-2.6a.4.4 0 0 1 .6.4l-1.7 2.6-.3.1" id="Fill-20"/>
                        <path d="M37 8.2h-.3a.4.4 0 0 1 0-.6l1-1.5a.4.4 0 0 1 .5.4l-1 1.5-.3.2" id="Fill-21"/>
                        <path d="M39.3 9.7A.4.4 0 0 1 39 9l1.6-2.6a.4.4 0 0 1 .7.4l-1.7 2.6-.3.2" id="Fill-22"/>
                        <path d="M41.8 11.3h-.2a.4.4 0 0 1-.1-.5l1-1.6a.4.4 0 0 1 .6.4l-1 1.5c0 .2-.2.2-.3.2" id="Fill-23"/>
                        <path d="M34.1 36.9a.6.6 0 1 1-1.1 0 .6.6 0 0 1 1.1 0" id="Fill-24"/>
                    </g>
                </g>
            </g>
            <g id="solar" transform="matrix(.99451 0 0 .99451 131.5 -1.5)">
                <g id="iconbig/panels/blue" transform="translate(12.4 12.4)">
                    <g id="Group-2" transform="translate(4.1 3.4)">
                        <g id="g63" transform="translate(0 2.9)">
                            <path d="M7.3 2.6.5 32.2 14 34.8 21.6.5Z" id="Rectangle-17" stroke="#204d7b"/>
                            <path d="m10.6 2.4-6.8 30" id="Line-4" stroke="#97a5a7"/>
                            <path d="m18 1.4-7.2 32.3" id="Line-4-Copy-2" stroke="#97a5a7"/>
                            <path d="M14.4 1.9 7.4 33" id="Line-4-Copy" stroke="#97a5a7"/>
                            <path d="m19.8 9.4-14.3.8Z" id="path57" stroke="#97a5a7"/>
                            <path d="m16.1 26-14-1.4Z" id="path59" stroke="#97a5a7"/>
                            <path d="m18 17.8-14.2-.3Z" id="path61" stroke="#97a5a7"/>
                        </g>
                        <g id="g79" transform="translate(14.5)">
                            <path d="m8.5 3-8 34.9 16 3 9-40.4Z" id="path65" stroke="#204d7b"/>
                            <path d="M12.4 2.7 4.4 38" id="path67" stroke="#97a5a7"/>
                            <path d="m21.1 1.6-8.4 38" id="path69" stroke="#97a5a7"/>
                            <path d="M16.8 2.2 8.6 39" id="path71" stroke="#97a5a7"/>
                            <path d="M23.2 11 6.4 12Z" id="path73" stroke="#97a5a7"/>
                            <path d="M19 30.6 2.4 29Z" id="path75" stroke="#97a5a7"/>
                            <path d="m21 20.9-16.6-.3Z" id="path77" stroke="#97a5a7"/>
                        </g>
                        <path id="Path-15" stroke="#97a5a7" d="M1.7 36.2 31.7 42 40.7 1.9"/>
                    </g>
                </g>
                <circle id="circle84" stroke="#204d7b" cx="36.7" cy="36.7" r="36.7"/>
            </g>
            <g id="battery" transform="matrix(.94871 0 0 -.94872 264.5 204.5)">
                <circle id="circle91" stroke="#97bd3f" cx="38.5" cy="38.5" r="38.5"/>
                <g id="iconbig/battery/blue" transform="translate(13 13)">
                    <g id="g96" transform="translate(3.3 15.7)">
                        <path d="M44.3 5.5h-2.5V2.3c0-1-.9-1.9-1.9-1.9H2.3C1.3.4.4 1.3.4 2.3v15.2c0 1 .9 1.9 1.9 1.9h37.6c1 0 1.9-.9 1.9-1.9v-3.1h2.5c.1 0 .2 0 .2-.2V5.7c0-.1 0-.2-.2-.2z" id="Combined-Shape" stroke="#97bd3f"/>
                        <path d="m28.3 3.4-6 13h-8.5l6-13zm3 0H39v13H25.3Zm-14.5 0-6 13H3.4v-13z" id="path94" fill="#97bd3f"/>
                    </g>
                </g>
            </g>
            <g id="solar-to-home" transform="matrix(0 -.9896 1 0 163.2 243.6)">
                <path id="battery-to-grid-line-9" d="M157.8 4.8H-8" stroke="#204d7b" strokeOpacity="1" markerStart="url(#marker6332)" markerMid="url(#marker6332)" markerEnd="url(#marker6332)"/>
            </g>
            <g id="grid-to-home" transform="translate(87.5 181.5)">
                <path id="grid-to-home-line" d="M0 0h60a10 10 0 0 1 10 10v60" stroke="#97a5a7" markerStart="url(#marker6332)" markerMid="url(#marker6332)" markerEnd="url(#marker6332)"/>
            </g>
            <g id="solar-to-grid" transform="rotate(90 33.5 121)">
                <path id="grid-to-home-line-2" d="M0 0h60a10 10 0 0 1 10 10v60" stroke="#204d7b" strokeOpacity="1" markerStart="url(#marker6332)" markerMid="url(#marker6332)" markerEnd="url(#marker6332)"/>
            </g>
            <g id="battery-to-home" transform="matrix(-1 0 0 1 248.5 181.5)" stroke="#97bd3f" strokeOpacity="1">
                <path id="grid-to-home-line-3" d="M0 0h60a10 10 0 0 1 10 10v60" stroke="#97bd3f" strokeOpacity="1" markerStart="url(#marker6332)" markerMid="url(#marker6332)" markerEnd="url(#marker6332)"/>
            </g>
            <g id="solar-to-battery" transform="matrix(0 1 1 0 181.5 87.5)"  strokeOpacity="1">
                <path id="grid-to-home-line-2-6" d="M0 0h60a10 10 0 0 1 10 10v60" stroke="#204d79" strokeOpacity="1" markerStart="url(#Arrow4)" markerMid="url(#Arrow4)" markerEnd="url(#Arrow4)"/>
            </g>
        </g>
    </g>
      </svg>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
