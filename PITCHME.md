##LDAP NOTES - MONGODB BOOTCAMP

+++

### Resources

[github repo - https://github.com/manfontan/mongodb-bootcamp](https://github.com/manfontan/mongodb-bootcamp)  

[online slides - https://gitpitch.com/manfontan/mongodb-bootcamp](https://gitpitch.com/manfontan/mongodb-bootcamp)  

---

### What is LDAP?  
LDAP stands for Lightweight Directory Access Protocol.

+++

  - L: lightweight, why?
    - Even though the “lightweight” moniker is primarily intended as a comparison to its predecessor, the X.500 ([ISO/IEC 9594-1](http://www.itu.int/rec/T-REC-X.500-201210-S)) Directory Access Protocol, LDAP really is lightweight compared with just about any other TCP-based protocol

+++

  - D: directory, what is it?
    - The Directory is "a collection of open systems cooperating to provide
 directory services"
    - A directory is a specialized database specifically designed for searching and browsing, in additional to supporting basic lookup and update functions.

+++

LDAP directory tree(traditional naming)  

+++?image=assets/intro_tree.png  

+++

DC tree  

+++?image=assets/intro_dctree.png

+++

  - AP: Access Protocol  
    - not server(implementation of the protocol) as many refer to it.  
    - [IETF](http://www.ietf.org/) Standard Track protocol and is specified in "Lightweight Directory Access Protocol (LDAP) Technical Specification Road Map" [RFC4510](http://www.rfc-editor.org/rfc/rfc4510.txt)  

    **Understand the protocol to solve server issues**


---

### Why Use LDAP?

+++  
  - Lightweight  
+++  
  - Public Standard [rfc4510](https://tools.ietf.org/pdf/rfc4510.pdf)  
+++  
  - Mature  
+++  
  - Security  

---

### Understanding LDAP Schema  


+++

  - OIDs:  
    - [1.3.6.1.4.1.34601](https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers)
    - [IANA](https://www.iana.org/about)  

Note:
who is this guy? well it is us :).  
IANA internet assigned numbers authority.

+++

  - There are a number of different types of elements that may comprise an LDAP schema. Every LDAP schema must include the following elements:

+++

  - **Attribute syntaxes** define the types of data that can be represented in a directory server.  

+++

  - **Matching rules** define the kinds of comparisons that can be performed against LDAP data.  

+++

  - **Attribute types** define named units of information that may be stored in entries.   

+++

  - **Object classes** define named collections of attribute types which may be used in entries containing that class, and which of those attribute types will be required rather than optional.  

---

### Some LDAP Operations

+++

### Bind Operation  

  The function of the Bind operation is to allow authentication
 information to be exchanged between the client and server.

+++

The **Bind operation** should be thought of as the **"authenticate"** operation.

  - *version*: no negotiation, if the server does not support the version will  
    send a protocolError on the BindResponse.

  - *name*: Name of the Directory Object that the client wants to bind as.  
     Empty for anonymous binds and SASL auth.

  - *authenticate*:
    - username passwords - UTF-8 -> [SASLprep](https://tools.ietf.org/pdf/rfc4013.pdf)

+++

### Unbind Operation

  The function of the Unbind operation is to terminate an LDAP session.
 The Unbind operation is not the antithesis of the Bind operation as
 the name implies. The naming of these operations are historical.
 The Unbind operation should be thought of as the **"quit"** operation.

+++

### Search Operation

---

### LDAP flavors  
[Server implementations](https://en.wikipedia.org/wiki/List_of_LDAP_software#Server_software)

+++

Microsoft AD

+++

Openldap

---

### MongoDB LDAP Testing

+++

AWS AD

+++

Drivers Openldap

+++

Training Vagrant files

---

  Figure 1.3: ldap message
+++?image=assets/intro_ldap_message.png

---

# Q&A

---

### References  

- [Lightweight Directory Access Protocol (LDAP)](https://tools.ietf.org/pdf/rfc4511.pdf)  
- [Mongodb 3.4 LDAP docs](https://docs.mongodb.com/manual/core/security-ldap/)  
- [IANA enterprise numbers](https://www.iana.org/assignments/enterprise-numbers/enterprise-numbers)  
- [mongoldap](https://docs.mongodb.com/manual/reference/program/mongoldap/)  
- [Basic LDAP Concepts](https://www.ldap.com/)  
- [Openldap Admin guide](http://www.openldap.org/doc/admin24/)  
- [List of LDAP software](https://en.wikipedia.org/wiki/List_of_LDAP_software#Server_software)  
- [GitPitch](https://github.com/gitpitch/gitpitch/wiki/Slide-Delimiters)  
