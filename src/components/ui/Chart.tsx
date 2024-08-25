// // import ReactApexcharts from 'react-apexcharts'
// // import { useTheme } from '@mui/material/styles'
// // import { ApexOptions } from 'apexcharts'

// // const donutColors = {
// //   series1: '#fdd835',
// //   series2: '#00d4bd',
// //   series3: '#826bf8',
// //   series4: '#1FD5EB',
// //   series5: '#ffa1a1'
// // }

// // export const ApexSocialVsCognito = ({ cognitoVsSocialCount }: { cognitoVsSocialCount: any }) => {
// //   const theme = useTheme()
// //   const keys = Object.keys(cognitoVsSocialCount)
// //   const seriesData = Object.values(cognitoVsSocialCount)

// //   const options: ApexOptions = {
// //     chart: {
// //         type: 'donut',
// //         offsetX: -5, // Adjust horizontal position of the chart
// //         offsetY: -5, // Adjust vertical position of the chart
// //       },
// //     stroke: { width: 0 },
// //     labels: keys,
// //     colors: [donutColors.series4, donutColors.series5, donutColors.series3, donutColors.series1],
// //     dataLabels: {
// //       enabled: true,
// //       formatter: (val: string) => `${parseInt(val, 10)}%`
// //     },
// //     legend: {
// //       position: 'bottom',
     
// //       labels: { colors: theme.palette.text.secondary },
// //       itemMargin: {
// //         vertical: 3,
// //         horizontal: 3
// //       },
     
// //     },
// //     plotOptions: {
// //       pie: {
// //         donut: {
// //           labels: {
// //             show: false,
// //             name: {
// //               fontSize: '0.8rem',    
// //             },
// //             value: {
// //               fontSize: '0.8rem',
           
// //               formatter: (val: string) => `${parseInt(val, 10)}`
// //             }
// //           }
          
// //         }
// //       }
// //     },
// //     responsive: [
// //       {
// //         breakpoint: 992,
// //         options: {
// //           chart: {
// //             height: 380
// //           },
// //           legend: {
// //             position: 'bottom',
           
// //           }
// //         }
// //       },
// //       {
// //         breakpoint: 576,
// //         options: {
// //           chart: {
// //             height: 320
// //           },
// //           plotOptions: {
// //             pie: {
// //               donut: {
// //                 labels: {
// //                   show: true,
// //                   name: {
// //                     fontSize: '10px'
// //                   },
// //                   value: {
// //                     fontSize: theme.typography.body1.fontSize
// //                   },
// //                   total: {
// //                     fontSize: theme.typography.body1.fontSize
// //                   }
// //                 }
// //               }
// //             }
// //           }
// //         }
// //       }
// //     ]
// //   }

// //   return (
// //      // @ts-ignore
// //     <ReactApexcharts  type='donut' height={200} options={options} series={seriesData} />
// //   )
// // }

// // const Chart = () => {
// //   const dummyData = {
// //     EmailPhoneSignups: 65,
// //     SocialSignups: 35
// //   }

// //   return (
// //     <div>
// //       <ApexSocialVsCognito cognitoVsSocialCount={dummyData} />
// //     </div>
// //   )
// // }

// // export default Chart




// import ReactApexcharts from 'react-apexcharts';
// import { useTheme } from '@mui/material/styles';
// import { ApexOptions } from 'apexcharts';

// const donutColors = {
//   series1: '#fdd835',
//   series2: '#00d4bd',
//   series3: '#826bf8',
//   series4: '#1FD5EB',
//   series5: '#ffa1a1',
// };

// export const ApexSocialVsCognito = ({ cognitoVsSocialCount }: { cognitoVsSocialCount: any }) => {
//   const theme = useTheme();
//   const keys = Object.keys(cognitoVsSocialCount);
//   const seriesData = Object.values(cognitoVsSocialCount);

//   const options: ApexOptions = {
//     chart: {
//       type: 'donut',
//       offsetX: -5, // Adjust horizontal position of the chart
//       offsetY: -5, // Adjust vertical position of the chart
//     },
//     stroke: { width: 0 },
//     labels: keys,
//     colors: [donutColors.series4, donutColors.series5, donutColors.series3, donutColors.series1],
//     dataLabels: {
//       enabled: true,
//       formatter: (val: string) => `${parseInt(val, 10)}%`,
//     },
//     legend: {
//       show: true, 
//       position: 'bottom',
//       // labels: {
//       //   colors: theme.palette.text.secondary,
//       // },
//       itemMargin: {
//         vertical: 2,
//         horizontal: 3,
//       },
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           labels: {
//             show: false,
//             name: {
//               fontSize: '0.8rem',
//             },
//             value: {
//               fontSize: '0.8rem',
//               formatter: (val: string) => `${parseInt(val, 10)}`,
//             },
//           },
//         },
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 992,
//         options: {
//           chart: {
//             height: 380,
//           },
//         },
//       },
//       {
//         breakpoint: 576,
//         options: {
//           chart: {
//             height: 320,
//           },
//           plotOptions: {
//             pie: {
//               donut: {
//                 labels: {
//                   show: true,
//                   name: {
//                     fontSize: '10px',
//                   },
//                   value: {
//                     fontSize: theme.typography.body1.fontSize,
//                   },
//                   total: {
//                     fontSize: theme.typography.body1.fontSize,
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <ReactApexcharts type="donut" height={200} options={options} series={seriesData} />
//   );
// };

// const Chart = () => {
//   const dummyData = {
   
//     SocialSignups: 35,
//   };

//   return (
//     <div style={{ padding: 0, margin: 0 }}>
//       <ApexSocialVsCognito cognitoVsSocialCount={dummyData} />
//     </div>
//   );
// };

// export default Chart;
