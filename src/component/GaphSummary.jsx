import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';

const GraphSummary = () => {
    return (
        <div className="summary-graph bg-[#FFFFFF] rounded-lg p-4">
            <div className="graph-top flex justify-between items-center">
                <div className="graph-left flex gap-4">
                    <h6>Summary</h6>

                    <div className="select-week">
                        <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                            <option value="" selected >This week</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>
                    </div>
                </div>

                <div className="graph-right">
                    <div className="select-week">
                        <select name="" id="" className="inter-font text-[#BEC0CA] text-[12px] outline-none">
                            <option value="" selected >Last 7 Days</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bar-graph">
                <BarChart
                    
                    series={[
                        { data: [90,
                                 30, 
                                 60,
                                 20,
                                 80,
                                 50,
                                 80] },
                        
                    ]}
                    
                    height={350}
                    xAxis={[{ data: ['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'], scaleType: 'band' }]}
                    yAxis={[{ data: ['20k', '40k', '60k', '80k', '100k']}]}
                    borderRadius={50}
                    colors={['#5570F1']}
                    margin={{ top: 30, bottom: 20, left: 30, right: 0 }}
                    
                />
            </div>

        </div>
    )
}

export default GraphSummary;