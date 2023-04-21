# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
<<<<<<< HEAD

puts "🌱Started seeding..."
 Administrator.create([
    {
        first_name: "Give",
        last_name: "Hope",
        email: "givehopecharities@gmail.com",
        password: "password123"
    }
])

# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)
=======
puts "🌱Started seeding..."
>>>>>>> 261d723bca46f759cf3a24bdb9a36684d150d74a

Administrator.create([
    {
        first_name: "Give",
        last_name: "Hope",
        email: "givehopecharities@gmail.com",
        password: "password123"
    }
])

<<<<<<< HEAD

=======
>>>>>>> 261d723bca46f759cf3a24bdb9a36684d150d74a
Donor.create([
    {
        first_name: "Angela",
        last_name: "Lukelas",
        email: "angie.lukelas@gmail.com",
        password: "password123"
    },
    {
        first_name: "Debbie",
        last_name: "Jane",
        email: "joannaoluoch@gmail.com",
        password: "password123"
    },
    {
        first_name: "Oskar",
        last_name: "Kimutai",
        email: "ostookim1@gmail.com",
        password: "password123"
    }
])

Charity.create([
    {
        name: "PadUp 4 North Eastern",
        email: "joannaoluoch@gmail.com",
        password: "password123",
        description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
        img_url: "https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        goal_amount: 5000,
        total_donations: 3857,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Water To Schools",
        email: "watertoschools@gmail.com",
        password: "password123",
        description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
        img_url: "https://images.unsplash.com/photo-1544476301-66914d9e95aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        goal_amount: 8000,
        total_donations: 6542,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Elevating Sanitary Facilities",
        email: "sanitary@gmail.com",
        password: "password123",
        description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
        img_url: "https://images.unsplash.com/photo-1584012961499-2147c0b3cf0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        goal_amount: 5000,
        total_donations: 3857,
        administrator_id: 1,
        approved: false
    },
    {
        name: "Zana Africa Foundation",
        email: "zanafrica@gmail.com",
        password: "password123",
        description: " Zana Africa Foundation is a non-profit organization working to improve menstrual health and education for girls in Kenya. Our goal is to provide girls with the knowledge and resources they need to manage their periods with dignity and without shame. We provide menstrual health education and distribute menstrual pads to girls in need, and we also work to break down the cultural barriers and stigmas surrounding menstruation. Our goal is to reach 1 million girls in Kenya by 2025.",
        img_url: "https://images.unsplash.com/photo-1444664361762-afba083a4d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        goal_amount: 7000,
        total_donations: 6002,
        administrator_id: 1,
        approved: true
    },
    {
        name: "AfriPads",
        email: "afripads@gmail.com",
        password: "password123",
        description: "Afripads is a social enterprise that produces and distributes reusable menstrual pads in Kenya. Our goal is to provide girls with a sustainable and affordable solution for menstrual care that allows them to stay in school and participate fully in their communities. We also work to break down the cultural barriers and stigmas surrounding menstruation, and we provide menstrual health education to girls and boys. Our goal is to provide 10 million girls in Kenya with reusable menstrual pads by 2025.",
        img_url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
        goal_amount: 10000,
        total_donations: 4682,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Wash United Kenya",
        email: "washunitedke@gmail.com",
        password: "password123",
        description: "Wash United Kenya is a non-profit organization that uses the power of sports to promote good hygiene and sanitation practices. We believe that everyone has the right to access clean water and sanitation facilities, and that promoting good hygiene practices is critical for the health and well-being of communities. Through our innovative programs, we use sports to engage and educate children and youth on good hygiene practices, including menstrual hygiene management. Our goal is to reach 5 million children and youth in Kenya by 2025.",
        img_url: "https://images.unsplash.com/photo-1629260606767-d6468a9a2ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        goal_amount: 120000,
        total_donations: 19670,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Sanergy",
        email: "sanergy@gmail.com",
        password: "password123",
        description: "Description: Sanergy is a social enterprise that provides sustainable sanitation solutions in urban slums in Kenya. We believe that everyone deserves access to safe and dignified sanitation facilities, and that improving access to sanitation can help improve health outcomes and create economic opportunities. We provide affordable and accessible sanitation facilities to communities in need, and we also work to create jobs and promote entrepreneurship through our innovative waste management system. Our goal is to provide access to safe and dignified sanitation facilities to 1 million people in Kenya by 2030.",
        img_url: "https://images.unsplash.com/photo-1509099896299-af46ad97ff57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        goal_amount: 200000,
        total_donations: 174390,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Jacaranda Health",
        email: "jakarandahealth@gmail.com",
        password: "password123",
        description: " Jacaranda Health is a non-profit organization that provides maternal and child health services in Kenya. We believe that access to quality healthcare is critical for the health and well-being of communities, and we also recognize the importance of menstrual health and hygiene management for girls and women. We provide menstrual health education and distribute menstrual pads to our clients, and we also work to promote good hygiene practices in our communities. Our goal is to provide comprehensive maternal and child health services to 1 million people in Kenya by 2030.",
        img_url: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        goal_amount: 10000,
        total_donations: 4000,
        administrator_id: 1,
        approved: false
    }
])

<<<<<<< HEAD
=======
Donation.create([
    {
        donation_amount: 1000,
        anonymous: false,
        charity_id: 1,
        donor_id: 2
    },
    {
        donation_amount: 500,
        anonymous: false,
        charity_id: 4,
        donor_id: 1
    },
    {
        donation_amount: 10,
        anonymous: false,
        charity_id: 2,
        donor_id: 3
    },
    {
        donation_amount: 70,
        anonymous: true,
        charity_id: 6,
        donor_id: 3
    },
    {
        donation_amount: 120,
        anonymous: false,
        charity_id: 2,
        donor_id: 1
    },
    {
        donation_amount: 50,
        anonymous: false,
        charity_id: 5,
        donor_id: 2
    },
    {
        donation_amount: 670,
        anonymous: true,
        charity_id: 1,
        donor_id: 3
    },
    {
        donation_amount: 100,
        anonymous: false,
        charity_id: 7,
        donor_id: 2
    },
    {
        donation_amount: 1000,
        anonymous: true,
        charity_id: 5,
        donor_id: 3
    }
])
>>>>>>> 261d723bca46f759cf3a24bdb9a36684d150d74a

Beneficiary.create([
    {
        name: "Fatima",
        location: "Turkana, North Eastern Kenya",
        description: "Before receiving donations from our organisation, Fatima struggled every month to manage her menstrual cycle. Her family struggled to afford basic necessities let alone sanitary products. This often ment she had to miss school during her period, causing her to fall back in her studies. Thanks to our donations, Fatima now has access to sanitary products and is able to attend school regularly.",
        items: "sanitary pads, wash cloths, cleaning kit and supplies",
        img_url: "https://images.unsplash.com/photo-1509099927777-1b8a87bc3b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        charity_id: 1
    },
    {
        name: "Aisha",
        location: "Baringo, Rift Valley",
        description: "Aisha is a young girl living in a rural village where access to sanitary products is limited. Prior to receiving donations from our organisation, Aisha had to resort to using unsanitary materials like rags and old cloths to mange her periods. This later led to infections and other health complications. Thanks to our organisation Aisha now has access to clean and safe sanitary products, allowing her to manage her period with dignity and health.",
        items: "Cleaning kit and supplies",
        img_url: "https://images.unsplash.com/photo-1567057419865-38d8cff1c2b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        charity_id: 2
    },
    {
        name: "Saron Wanjiku",
        location: "Mathare slum, Nairobi",
        description: "Sharon Wanjiku is a 13-year-old girl living in Mathare slum, one of the poorest areas in Nairobi. Before Zana Africa Foundation provided menstrual pads and menstrual health education to her school, Sharon used to miss school for a week every month during her period, as she could not afford menstrual products. This made her fall behind in her studies and affected her academic performance. With the help of Zana Africa Foundation, Sharon now has access to affordable menstrual products and menstrual health education, and no longer misses school during her period. She hopes to become a teacher one day and inspire other girls in her community to pursue education",
        items: "Menstrual pads, menstrual health education, access to reproductive health services, access to a safe space to discuss menstrual health with peers and mentors, access to leadership training and mentorship.",
        img_url: "https://images.unsplash.com/photo-1487546511569-62a31e1c607c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        charity_id: 4
    },
    {
        name: "Jane Njeri",
        location: "Nakuru county, Rift Valley",
        description: "Jane Njeri is a 14-year-old girl living in a rural community in Nakuru County, Rift Valley. Before Afripads Foundation provided her with reusable menstrual pads and menstrual health education, Jane used to miss school for a week every month during her period. Her family could not afford to buy disposable pads, and she did not have access to clean water to wash reusable pads. Afripads Foundation provided Jane with a kit containing reusable pads, soap, and other hygiene supplies, and taught her how to properly care for and use the pads. Jane can now attend school regularly and focus on her studies. She dreams of becoming a pilot one day and flying across the world.",
        items: "Reusable menstrual pads, soap, hygiene",
        img_url: "https://images.unsplash.com/photo-1486190204932-5fcd44cb15b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
        charity_id: 5
    },
    {
        name: "Amina",
        location: "Kisumu county, Western Kenya",
        description: "Amina is a 13-year-old girl living in Kisumu County, Kenya. Prior to the intervention of Wash United, Amina and her classmates often missed school during their menstrual cycle due to a lack of proper menstrual hygiene management facilities. Amina was one of the many girls in her school who had to miss school frequently, leading to her falling behind in her studies. However, after Wash United installed menstrual hygiene management facilities in her school, Amina no longer had to miss school during her periods. This has helped her stay on track with her studies, and she dreams of becoming a doctor, who helps girls like her take care of their bodies.",
        items: " Menstrual hygiene products, access to proper sanitation facilities, education on menstrual hygiene management, access to clean water, and improved hygiene and sanitation in the school.",
        img_url: "https://images.unsplash.com/photo-1523881374236-dd34f6ac1226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
        charity_id: 6
    },
    {
        name: "Mary Wanjiku",
        location: "Kibera slums, Nairobi",
        description: "Mary Wanjiru is a 15-year-old girl living in Kibera slum, one of the largest informal settlements in Africa. Before Femme International started their menstrual health program in her school, Mary had very limited knowledge about menstrual health and hygiene. She used to be ashamed and embarrassed about her period and did not feel comfortable discussing it with anyone. Femme International provided Mary and her classmates with menstrual health education, menstrual pads, and access to reproductive health services. Mary is now a confident and informed young woman, who is not ashamed of her period. She aspires to become a journalist one day and share stories of women and girls in her community.",
        items: "Menstrual pads, menstrual health education, access to reproductive health services, access to a safe space to discuss menstrual health with peers and mentors.",
        img_url: "https://images.unsplash.com/photo-1529598993581-b025f3f79f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        charity_id: 7
    }
])

<<<<<<< HEAD

Charity.create([
    {
        name: "PadUp 4 North Eastern",
        email: "joannaoluoch@gmail.com",
        password: "password123",
        description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
        img_url: "https://unsplash.com/photos/2rMn97DPTdU",
        goal_amount: 5000,
        total_donations: 3857,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Water To Schools",
        email: "watertoschools@gmail.com",
        password: "password123",
        description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
        img_url: "https://unsplash.com/photos/V-XM4kkWpng",
        goal_amount: 8000,
        total_donations: 6542,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Elevating Sanitary Facilities",
        email: "sanitary@gmail.com",
        password: "password123",
        description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
        img_url: "https://unsplash.com/photos/gwCpqTiLHlc",
        goal_amount: 5000,
        total_donations: 3857,
        administrator_id: 1,
        approved: false
    },
    {
        name: "Zana Africa Foundation",
        email: "zanafrica@gmail.com",
        password: "password123",
        description: " Zana Africa Foundation is a non-profit organization working to improve menstrual health and education for girls in Kenya. Our goal is to provide girls with the knowledge and resources they need to manage their periods with dignity and without shame. We provide menstrual health education and distribute menstrual pads to girls in need, and we also work to break down the cultural barriers and stigmas surrounding menstruation. Our goal is to reach 1 million girls in Kenya by 2025.",
        img_url: "https://unsplash.com/photos/9cx4-QowgLc",
        goal_amount: 7000,
        total_donations: 6002,
        administrator_id: 1,
        approved: true
    },
    {
        name: "AfriPads",
        email: "afripads@gmail.com",
        password: "password123",
        description: "Afripads is a social enterprise that produces and distributes reusable menstrual pads in Kenya. Our goal is to provide girls with a sustainable and affordable solution for menstrual care that allows them to stay in school and participate fully in their communities. We also work to break down the cultural barriers and stigmas surrounding menstruation, and we provide menstrual health education to girls and boys. Our goal is to provide 10 million girls in Kenya with reusable menstrual pads by 2025.",
        img_url: "https://unsplash.com/photos/cVEOh_JJmEE",
        goal_amount: 10000,
        total_donations: 4682,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Wash United Kenya",
        email: "washunitedke@gmail.com",
        password: "password123",
        description: "Wash United Kenya is a non-profit organization that uses the power of sports to promote good hygiene and sanitation practices. We believe that everyone has the right to access clean water and sanitation facilities, and that promoting good hygiene practices is critical for the health and well-being of communities. Through our innovative programs, we use sports to engage and educate children and youth on good hygiene practices, including menstrual hygiene management. Our goal is to reach 5 million children and youth in Kenya by 2025.",
        img_url: "https://unsplash.com/photos/JQwzKcHLHoc",
        goal_amount: 120000,
        total_donations: 19670,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Sanergy",
        email: "sanergy@gmail.com",
        password: "password123",
        description: "Description: Sanergy is a social enterprise that provides sustainable sanitation solutions in urban slums in Kenya. We believe that everyone deserves access to safe and dignified sanitation facilities, and that improving access to sanitation can help improve health outcomes and create economic opportunities. We provide affordable and accessible sanitation facilities to communities in need, and we also work to create jobs and promote entrepreneurship through our innovative waste management system. Our goal is to provide access to safe and dignified sanitation facilities to 1 million people in Kenya by 2030.",
        img_url: "https://unsplash.com/photos/SPS796v4KmM",
        goal_amount: 200000,
        total_donations: 174390,
        administrator_id: 1,
        approved: true
    },
    {
        name: "Jacaranda Health",
        email: "jakarandahealth@gmail.com",
        password: "password123",
        description: " Jacaranda Health is a non-profit organization that provides maternal and child health services in Kenya. We believe that access to quality healthcare is critical for the health and well-being of communities, and we also recognize the importance of menstrual health and hygiene management for girls and women. We provide menstrual health education and distribute menstrual pads to our clients, and we also work to promote good hygiene practices in our communities. Our goal is to provide comprehensive maternal and child health services to 1 million people in Kenya by 2030.",
        img_url: "https://unsplash.com/photos/0cgpyigyIkM",
        goal_amount: 10000,
        total_donations: 4000,
        administrator_id: 1,
        approved: false
    }
])

# Charity.create([
#     {
#         name: "PadUp 4 North Eastern",
#         email: "joannaoluoch@gmail.com",
#         password: "password123",
#         description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
#         img_url: "https://unsplash.com/photos/2rMn97DPTdU",
#         goal_amount: 5000,
#         total_donations: 3857,
#         admin_id: 1,
#         approved: true
#     },
#     {
#         name: "Water To Schools",
#         email: "watertoschools@gmail.com",
#         password: "password123",
#         description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
#         img_url: "https://unsplash.com/photos/V-XM4kkWpng",
#         goal_amount: 8000,
#         total_donations: 6542,
#         admin_id: 1,
#         approved: true
#     },
#     {
#         name: "Elevating Sanitary Facilities",
#         email: "sanitary@gmail.com",
#         password: "password123",
#         description: "This charity aims to provide for 2000 girls living in the north eastern region with sufficient sanitary towels to participate in the school year and live a comfortable and healthier life during this stage in their life.",
#         img_url: "https://unsplash.com/photos/gwCpqTiLHlc",
#         goal_amount: 5000,
#         total_donations: 3857,
#         admin_id: 1,
#         approved: false
#     },
#     {
#         name: "Zana Africa Foundation",
#         email: "zanafrica@gmail.com",
#         password: "password123",
#         description: " Zana Africa Foundation is a non-profit organization working to improve menstrual health and education for girls in Kenya. Our goal is to provide girls with the knowledge and resources they need to manage their periods with dignity and without shame. We provide menstrual health education and distribute menstrual pads to girls in need, and we also work to break down the cultural barriers and stigmas surrounding menstruation. Our goal is to reach 1 million girls in Kenya by 2025.",
#         img_url: "https://unsplash.com/photos/9cx4-QowgLc",
#         goal_amount: 7000,
#         total_donations: 6002,
#         admin_id: 1,
#         approved: true
#     },
#     {
#         name: "AfriPads",
#         email: "afripads@gmail.com",
#         password: "password123",
#         description: "Afripads is a social enterprise that produces and distributes reusable menstrual pads in Kenya. Our goal is to provide girls with a sustainable and affordable solution for menstrual care that allows them to stay in school and participate fully in their communities. We also work to break down the cultural barriers and stigmas surrounding menstruation, and we provide menstrual health education to girls and boys. Our goal is to provide 10 million girls in Kenya with reusable menstrual pads by 2025.",
#         img_url: "https://unsplash.com/photos/cVEOh_JJmEE",
#         goal_amount: 10000,
#         total_donations: 4682,
#         admin_id: 1,
#         approved: true
#     },
#     {
#         name: "Wash United Kenya",
#         email: "washunitedke@gmail.com",
#         password: "password123",
#         description: "Wash United Kenya is a non-profit organization that uses the power of sports to promote good hygiene and sanitation practices. We believe that everyone has the right to access clean water and sanitation facilities, and that promoting good hygiene practices is critical for the health and well-being of communities. Through our innovative programs, we use sports to engage and educate children and youth on good hygiene practices, including menstrual hygiene management. Our goal is to reach 5 million children and youth in Kenya by 2025.",
#         img_url: "https://unsplash.com/photos/JQwzKcHLHoc",
#         goal_amount: 120000,
#         total_donations: 19670,
#         admin_id: 1,
#         approved: true
#     },
#     {
#         name: "Sanergy",
#         email: "sanergy@gmail.com",
#         password: "password123",
#         description: "Description: Sanergy is a social enterprise that provides sustainable sanitation solutions in urban slums in Kenya. We believe that everyone deserves access to safe and dignified sanitation facilities, and that improving access to sanitation can help improve health outcomes and create economic opportunities. We provide affordable and accessible sanitation facilities to communities in need, and we also work to create jobs and promote entrepreneurship through our innovative waste management system. Our goal is to provide access to safe and dignified sanitation facilities to 1 million people in Kenya by 2030.",
#         img_url: "https://unsplash.com/photos/SPS796v4KmM",
#         goal_amount: 200000,
#         total_donations: 174390,
#         admin_id: 1,
#         approved: true
#     },
#     {
#         name: "Jacaranda Health",
#         email: "jakarandahealth@gmail.com",
#         password: "password123",
#         description: " Jacaranda Health is a non-profit organization that provides maternal and child health services in Kenya. We believe that access to quality healthcare is critical for the health and well-being of communities, and we also recognize the importance of menstrual health and hygiene management for girls and women. We provide menstrual health education and distribute menstrual pads to our clients, and we also work to promote good hygiene practices in our communities. Our goal is to provide comprehensive maternal and child health services to 1 million people in Kenya by 2030.",
#         img_url: "https://unsplash.com/photos/0cgpyigyIkM",
#         goal_amount: 10000,
#         total_donations: 4000,
#         admin_id: 1,
#         approved: false
#     }
# ])



Beneficiary.create([
    {
        name: "Fatima",
        location: "Turkana, North Eastern Kenya",
        description: "Before receiving donations from our organisation, Fatima struggled every month to manage her menstrual cycle. Her family struggled to afford basic necessities let alone sanitary products. This often ment she had to miss school during her period, causing her to fall back in her studies. Thanks to our donations, Fatima now has access to sanitary products and is able to attend school regularly.",
        items: "sanitary pads, wash cloths, cleaning kit and supplies",
        img_url: "https://unsplash.com/photos/2rMn97DPTdU",
        charity_id: 2

    },
    {
        name: "Aisha",
        location: "Baringo, Rift Valley",
        description: "Aisha is a young girl living in a rural village where access to sanitary products is limited. Prior to receiving donations from our organisation, Aisha had to resort to using unsanitary materials like rags and old cloths to mange her periods. This later led to infections and other health complications. Thanks to our organisation Aisha now has access to clean and safe sanitary products, allowing her to manage her period with dignity and health.",
        items: "Cleaning kit and supplies",
        img_url: "https://unsplash.com/photos/KBpIcWV6o2c",
        charity_id: 1
    },
    {
        name: "Saron Wanjiku",
        location: "Mathare slum, Nairobi",
        description: "Sharon Wanjiku is a 13-year-old girl living in Mathare slum, one of the poorest areas in Nairobi. Before Zana Africa Foundation provided menstrual pads and menstrual health education to her school, Sharon used to miss school for a week every month during her period, as she could not afford menstrual products. This made her fall behind in her studies and affected her academic performance. With the help of Zana Africa Foundation, Sharon now has access to affordable menstrual products and menstrual health education, and no longer misses school during her period. She hopes to become a teacher one day and inspire other girls in her community to pursue education",
        items: "Menstrual pads, menstrual health education, access to reproductive health services, access to a safe space to discuss menstrual health with peers and mentors, access to leadership training and mentorship.",
        img_url: "https://unsplash.com/photos/ZyWN6N41JUc",
        charity_id: 5
    },
    {
        name: "Jane Njeri",
        location: "Nakuru county, Rift Valley",
        description: "Jane Njeri is a 14-year-old girl living in a rural community in Nakuru County, Rift Valley. Before Afripads Foundation provided her with reusable menstrual pads and menstrual health education, Jane used to miss school for a week every month during her period. Her family could not afford to buy disposable pads, and she did not have access to clean water to wash reusable pads. Afripads Foundation provided Jane with a kit containing reusable pads, soap, and other hygiene supplies, and taught her how to properly care for and use the pads. Jane can now attend school regularly and focus on her studies. She dreams of becoming a pilot one day and flying across the world.",
        items: "Reusable menstrual pads, soap, hygiene",
        img_url: "https://unsplash.com/photos/TY5r6Rc0DW8",
        charity_id: 5
    },
    {
        name: "Amina",
        location: "Kisumu county, Western Kenya",
        description: "Amina is a 13-year-old girl living in Kisumu County, Kenya. Prior to the intervention of Wash United, Amina and her classmates often missed school during their menstrual cycle due to a lack of proper menstrual hygiene management facilities. Amina was one of the many girls in her school who had to miss school frequently, leading to her falling behind in her studies. However, after Wash United installed menstrual hygiene management facilities in her school, Amina no longer had to miss school during her periods. This has helped her stay on track with her studies, and she dreams of becoming a doctor, who helps girls like her take care of their bodies.",
        items: " Menstrual hygiene products, access to proper sanitation facilities, education on menstrual hygiene management, access to clean water, and improved hygiene and sanitation in the school.",
        img_url: "https://unsplash.com/photos/IrtRZ-6HxIE",
        charity_id: 3
    },
    {
        name: "Mary Wanjiku",
        location: "Kibera slums, Nairobi",
        description: "Mary Wanjiru is a 15-year-old girl living in Kibera slum, one of the largest informal settlements in Africa. Before Femme International started their menstrual health program in her school, Mary had very limited knowledge about menstrual health and hygiene. She used to be ashamed and embarrassed about her period and did not feel comfortable discussing it with anyone. Femme International provided Mary and her classmates with menstrual health education, menstrual pads, and access to reproductive health services. Mary is now a confident and informed young woman, who is not ashamed of her period. She aspires to become a journalist one day and share stories of women and girls in her community.",
        items: "Menstrual pads, menstrual health education, access to reproductive health services, access to a safe space to discuss menstrual health with peers and mentors.",
        img_url: "https://unsplash.com/photos/LSrChr55Ggc",
        charity_id: 4
    }
])


Donation.create([
    {
        donation_amount: 1000,
        anonymous: false,
        charity_id: 1,
        donor_id: 2
    },
    {
        donation_amount: 500,
        anonymous: false,
        charity_id: 4,
        donor_id: 1
    },
    {
        donation_amount: 10,
        anonymous: false,
        charity_id: 2,
        donor_id: 3
    },
    {
        donation_amount: 70,
        anonymous: true,
        charity_id: 6,
        donor_id: 3
    },
    {
        donation_amount: 120,
        anonymous: false,
        charity_id: 2,
        donor_id: 1
    },
    {
        donation_amount: 50,
        anonymous: false,
        charity_id: 5,
        donor_id: 2
    },
    {
        donation_amount: 670,
        anonymous: true,
        charity_id: 1,
        donor_id: 3
    },
    {
        donation_amount: 100,
        anonymous: false,
        charity_id: 7,
        donor_id: 2
    },
    {
        donation_amount: 1000,
        anonymous: true,
        charity_id: 5,
        donor_id: 3
    }
])

puts "🌱finished seeding..."
=======
puts "Finished seeding!🌱"
>>>>>>> 261d723bca46f759cf3a24bdb9a36684d150d74a
