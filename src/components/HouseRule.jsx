
const HouseRule = () => {
    return (
        <div>
            <h1>House Rules</h1>

            <table className="w-2/3 mx-auto border ">
                <tr className="">
                    <th className="flex items-center p-3 gap-5"><svg class="bk-icon -streamline-check_in" height="20" width="20" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M87.33 66.22c.06-.1.11-.2.16-.3.077-.125.143-.255.2-.39.054-.133.097-.27.13-.41.04-.112.073-.225.1-.34.1-.515.1-1.045 0-1.56a3.352 3.352 0 0 0-.1-.34 2.802 2.802 0 0 0-.13-.41 2.868 2.868 0 0 0-.2-.39c0-.1-.1-.2-.16-.3a4.922 4.922 0 0 0-.5-.61l-24-24a4.002 4.002 0 1 0-5.66 5.66L74.34 60H20a4 4 0 0 0 0 8h54.34L57.17 85.17a4.002 4.002 0 1 0 5.66 5.66l24-24c.183-.19.35-.394.5-.61zM92 0h-8a4 4 0 0 0 0 8h8c6.627 0 12 5.373 12 12v88c0 6.627-5.373 12-12 12h-8a4 4 0 0 0 0 8h8c11.046 0 20-8.954 20-20V20c0-11.046-8.954-20-20-20z"></path></svg>Check-in</th>
                    <td>From 12:00 to 18:00</td>
                    <hr className="" />
                </tr>
                
                <tr>
                    <th>Check-out</th>
                    <td>From 08:00 to 12:00</td>

                </tr>
                <hr />
            </table>

        </div>
    );
};

export default HouseRule;