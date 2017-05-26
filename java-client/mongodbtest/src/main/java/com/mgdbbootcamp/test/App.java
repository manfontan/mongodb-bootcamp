package com.mgdbbootcamp.test;
import java.net.UnknownHostException;
import java.util.Date;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoException;

/**
 * Java driver test
 *
 */
public class App
{
public static void main( String[] args )
{
        String user = "dbmaster";
        String password = "adminPa55wd123";

        /**** Connect to MongoDB ****/
        MongoClientURI uri = new MongoClientURI("mongodb://dbmaster:adminPa55wd123@192.168.14.102/?authSource=$external&authMechanism=PLAIN");
        MongoClient mongo = new MongoClient(uri);
        mongo.close();
        /**** Done ****/
        System.out.println("you successfully connected using ldap: "+user);

}
}
