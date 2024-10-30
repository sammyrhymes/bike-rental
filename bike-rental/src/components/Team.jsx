

const teamMembers = [
    {
        name: 'Alice Johnson',
        title: 'CEO',
        description: 'Alice is passionate about cycling and sustainability. She leads the company with a vision for eco-friendly transportation.',
        image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image path
    },
    {
        name: 'Bob Smith',
        title: 'Operations Manager',
        description: 'Bob ensures smooth operations and customer satisfaction. He has a knack for logistics and loves biking on weekends.',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image path
    },
    {
        name: 'Charlie Brown',
        title: 'Marketing Specialist',
        description: 'Charlie is our creative mind, responsible for our marketing strategies. He enjoys exploring new trails in his free time.',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image path
    },
    {
        name: 'Dana Lee',
        title: 'Customer Support',
        description: 'Dana is dedicated to helping our customers. She loves biking and enjoys sharing tips on the best local routes.',
        image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400', // Replace with actual image path
    },
];

const Team = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 ">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-full h-24 w-24 object-cover mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <h4 className="text-gray-600 mb-2">{member.title}</h4>
                            <p className="text-gray-700">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
