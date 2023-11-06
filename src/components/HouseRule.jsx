
const HouseRule = () => {

    // const rules= 'data will be fetched from database'


    return (
        <div>
            <h1 className='text-center font-black lg:text-5xl md:text-4xl text-2xl pt-8 pb-4  mb-2'>House Rules</h1>


            <div className="overflow-x-auto w-2/3 mx-auto">
                <table className="table border">
                 

                    <tbody>             
                        {
                            rules.map(rule=><tr>
                                <th className="flex items-center p-3 gap-5"><img className="w-5" src={rule.icon} alt="" />{rule.title}</th>
                                <td>{rule.description}</td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default HouseRule;