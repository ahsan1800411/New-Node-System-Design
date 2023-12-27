> cache is the part of the CPU. Reading data from the cache is a lot faster than from RAM and same for reading from the RAM is a lot faster than from the hard drive.
> Reliabiltiy: it is the probability that a system will not fail in the future.

q : what is fault tolerance?

> Fault tolerance is the property that enables a system to continue operating properly in the event of the failure of (or one or more faults within) some of its components

q : what is throughtput?

> Throughput is the number of tasks completed per unit time. It is the number of tasks completed per second if the unit time is one second.

q: what is latency?

> Latency is the time taken to complete a task or to produce a result.

one way of reducing latency is having different servers on the different parts of the world. Another way is to have a cdn.

q: difference b/w tcp and ip?

> TCP is a protocol that defines how data is sent and received over the internet. IP is a protocol that defines how computers send packets of data to each other.

q: what is a packet?

> A packet is a small amount of data sent over a network, such as a LAN or the Internet. Multiple packets are used to send and receive data over the Internet. For example, when you enter a URL into your browser, your computer sends a packet to the DNS server, which returns the server's IP address in a packet. Your computer then sends multiple packets to the server, which returns the website's home page in several packets. Each packet can take a different route to the destination computer. Therefore, if one packet is lost or delayed, the other packets can still reach the destination and be reassembled into the complete message.

q: is Ip handles the ordering of the data?

> No, IP does not handle the ordering of the data. that's why we use tcp on top of ip.

q: how tcp handles the ordering of the data ?

> TCP uses sequence numbers to ensure that data is reassembled in the correct order. Each packet is assigned a sequence number, which is included in the TCP header. When the packets reach their destination, they are reassembled into the original message based on the sequence numbers.

q: what is udp?

> UDP is a protocol that defines how computers send datagrams to other computers over the Internet. It is an alternative to the Transmission Control Protocol (TCP). Unlike TCP, UDP is connectionless and does not guarantee reliable communication; it's up to the application that received the message to process any errors and verify correct delivery.

> what is dns?

> DNS stands for Domain Name System. It is a system that translates domain names to IP addresses. It is a distributed database of human-readable names and associated IP addresses.

> http is a request-response protocol.

> WebRTc is built on top of udp. All other protocols like http, smtp, websockets etc are built on top of tcp.

> what is polling?

> Polling is a technique used by client-side scripts to send requests to the server. The client-side script sends a request to the server at a specified interval. The server processes the request and sends a response back to the client. The client-side script then processes the response and updates the page accordingly.

q: How web sockets works?

> WebSockets is a protocol that enables two-way persistent communication channels over TCP connections. It is used by web browsers to communicate with web servers via a WebSocket server. The WebSocket server uses the WebSocket protocol to establish a connection with the client. Once the connection is established, the client and server can send messages to each other at any time. it is a full duplex communication. It is used for real time communication.

> Rest Api are built on top of http.

q: what is stateless in rest api?

> Stateless means that the server does not store any state about the client session on the server-side. Instead, the client must include all the information required by the server in each request, typically in the URL, POST data, or headers.

> what are benefits of stateless?

> If we have state on the server let's say the client request first 10 videso and the request goes to the server and we are storing the state on the server. then if the client are requeting 10 more videos we're ok here. But let's say we have 3 servers and the client is requesting 10 more videos and the request goes to the server 1 using a load-balancer and the server 1 is storing the state of the client. Now if the client is requesting 10 more videos and the request goes to the server 2 and the server 2 is not storing the state of the client. So the server 2 will not be able to send the videos to the client. So we have to store the state on all the servers. So if we have 100 servers then we have to store the state on all the servers. So it is very difficult to maintain the state on all the servers. So that's why we have to make the server stateless.

> grPC is built on top of http2. It is faster than rest api. it is used for internal communication between services. With gRPC we send buffers of data instead of json. with gRPC we have a schema for everything like what the request will look like and what the response will look like. So we have a schema for everything

> this aws best describes the caching https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/welcome.html?did=wp_card&trk=wp_card

q: what is a CDN?

> A content delivery network (CDN) is a system of distributed servers (network) that deliver pages and other Web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.

q: difference b/w pull and push cdn?

> In a pull CDN, the CDN pulls content from the origin server and caches it on the CDN edge servers here how it works, When a user requests the content, the CDN edge server closest to the user will deliver the content and if the content is not available in the cdn, it will request throught the origin server and upon subsequent requests the content is cached. In a push CDN, the content is pushed to the CDN edge servers from the origin server every time a new content is pushed to origin server it is pushed to cdn as well. When a user requests the content, the CDN edge server closest to the user will deliver the content.

> the issues with push cdn is that if the content is not requested by the user then it will be a waste of resources to cache early in the cdn

q: what is forward proxy?

> A forward proxy is a proxy that is used by clients to access the Internet. It is used to hide the identity of the clients and to bypass firewall restrictions. A forward proxy is also known as a proxy server.

A reverse proxy is a server that sits between client devices and one or more backend servers. Its primary function is to handle client requests and forward them to the appropriate backend server. The key difference between a reverse proxy and a forward proxy is in the direction of the proxying:

Forward Proxy: Acts on behalf of client devices, forwarding their requests to the internet or external servers. It primarily serves to protect and anonymize clients.

Reverse Proxy: Acts on behalf of backend servers, receiving client requests and directing them to the appropriate backend server. It often serves to enhance security, load balancing, and caching, improving the performance and resilience of web services.

In essence, a forward proxy faces client devices and hides them from the internet, while a reverse proxy faces the internet and hides backend servers from clients.

q: what is consistent hashing?

> Consistent hashing is a technique used in distributed hash tables (DHTs) that provides hash tables with the ability to scale dynamically. It is used to distribute data across multiple servers. It is also used to reduce the number of keys that need to be remapped when a hash table is resized.

another definition of consistent hashing is that Consistent hashing is a technique used in distributed computing and data storage systems to efficiently distribute data across multiple nodes or servers while minimizing the need for data movement when nodes are added or removed from the system. It helps ensure that data remains evenly distributed and minimizes the disruption caused by changes in the cluster's configuration

> what is ACID properties. explain each one of them?

> ACID stands for Atomicity, Consistency, Isolation, and Durability. These are the properties that guarantee that database transactions are processed reliably.

> what is atomicity?

> Atomicity means that a transaction is either processed completely or not processed at all. If a transaction is processed partially, it is rolled back.

> what is consistency?

> Consistency means that a transaction must bring the database from one valid state to another. If a transaction violates any constraints, the database is rolled back to the previous state.

> what is isolation?

> Isolation means that a transaction must be processed independently of other transactions. If a transaction is processed concurrently with another transaction, the results must be the same as if the transactions were processed sequentially.

> what is durability?

> Durability means that once a transaction is processed, the results are permanent. If a transaction is processed and the database crashes, the results are not lost.

Atomicity - All queries in a transaction must succeed.
If one fails, all should rollback.
Consistency - The database must be consistent before and
after the transaction.
Isolation - Multiple Transactions occur independently
without interference.
Durability - Committed transaction must be persisted in
a durable non-volatile storage

> what is asyncronous and syncronous replication?

When you scale horizontally and have multiple database nodes, the approach you described—writing to both nodes—is known as a synchronous or immediate replication strategy. In this strategy, every write operation is performed on multiple nodes simultaneously to ensure data consistency across all nodes

n contrast, some distributed databases may use asynchronous replication for better write scalability and lower latency. In asynchronous replication, the primary node acknowledges the write to the client immediately after storing the data locally, without waiting for acknowledgments from secondary nodes. Asynchronous replication can provide better write performance at the cost of potentially lower data consistency guarantees, as there may be a brief period where the data is not yet replicated to all nodes.

SQL databases don't have sharding by default.

A great article on database sharding: https://aws.amazon.com/what-is/database-sharding/#:~:text=Database%20sharding%20splits%20a%20single,original%20database's%20schema%20or%20design.

q: what is idempotent in rest api?

> An idempotent HTTP method is an HTTP method that can be called many times without different outcomes. It would not matter if the method is called only once, or ten times over. The result should be the same. Idempotent HTTP methods include PUT, DELETE, and GET.

> Cdn helps in static content like images, css, js, videos etc. Cdn does not help in dynamic content like html, php, jsp etc.

> cloud-native is the blueprint for building applications on the cloud that are more available and scalable.

> kafka have high throughput(Quantity of data being transferred)

> Circuit breaker pattern prevents cascading failures in distributed systems. A circuit breaker is a component that monitors the status of a remote service and prevents the application from repeatedly trying to invoke the service if it fails.

> SQL > when optimizing select clasues consider using covering indexes that needs all the colums needed for the query especially select, where, and join (this simply means try to use where clauses with the columns that are already in the index)

> Avoid using funtions or calculations on indexed colums in the where clause. This prevents the use of indexes. Use direct comparison instead. example is use where orderDate>2020 instead of where year(orderDate)>2020

q: what is big-bang strategy in deployment?. Explain it in details. what are it's pros and cons?

> Big bang deployment is a deployment strategy in which the entire system is deployed at once. It is the simplest deployment strategy. It is also the riskiest deployment strategy because if the deployment fails, the entire system will be down. It is also the most difficult deployment strategy to roll back.

A big-bang deployment is a strategy that involves deploying a new version of software all at once, replacing the old version entirely. It's a high-risk approach with no parallel versions. The new version is rigorously tested, and a rollback plan is prepared. Communication with users is vital to minimize disruptions. It's typically used for smaller systems or when the nature of the changes makes gradual deployment impractical

q: what is rolling deployment?. Explain it in details. what are it's pros and cons?

A rolling deployment is a strategy to update software gradually, instance by instance, ensuring minimal downtime. It involves running multiple instances of the application, updating them one by one while maintaining access to users. Health checks and load balancing are used to ensure the reliability of the update. If issues arise, the process can be paused or rolled back. This approach is ideal for high-availability systems where continuous service is crucial.

q: what is blue-green deployment?. Explain it in details. what are it's pros and cons?

A blue-green deployment is a strategy that involves running two identical production environments called Blue and Green. At any time, only one of the environments is live, with the live environment serving all production traffic. For this example, Blue is currently live and Green is idle.

Canary deployment is a strategy that involves gradually rolling out a new version of software to a small subset of users or servers. It's a low-risk approach that allows you to test the new version in production before rolling it out to all users. It's typically used for larger systems or when the nature of the changes makes gradual deployment practical.

2nd Definition>
Canary deployment is a software release strategy that involves rolling out a new version of an application to a small subset of users or servers before deploying it to the entire user base. The term "canary" comes from the practice of using canaries in coal mines to detect dangerous gases; if the canary became ill or died, it was a warning to miners to evacuate. Similarly, in canary deployment, a small group of users or servers acts as the "canary" to detect potential issues with the new release

q: what is A/B testing?

> A/B testing is a technique used to compare two versions of a product to determine which one performs better. It is used to test new features, designs, and marketing strategies. It is also known as split testing.

q: what is upd?

> UDP is a protocol that defines how computers send datagrams to other computers over the Internet. It is an alternative to the Transmission Control Protocol (TCP). Unlike TCP, UDP is connectionless and does not guarantee reliable communication; it's up to the application that received the message to process any errors and verify correct delivery.

webrtc is built on top of udp. All other protocols like http, smtp, websockets etc are built on top of tcp. udp is faster than tcp. udp is used for real time communication especially for video and audio streaming.

> tcp ensures that every packet is delivered to the destination. udp does not ensure that every packet is delivered to the destination.
