

### generate the maven archetype
```
mvn archetype:generate -DgroupId=com.mgdbbootcamp.test -DartifactId=mongodbtest -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

### add pom dependencies
```
<dependency>
  <groupId>org.mongodb</groupId>
  <artifactId>mongo-java-driver</artifactId>
  <version>3.4.0-beta1</version>
  <scope>compile</scope>
</dependency>
```

### add pom plugins
```
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-compiler-plugin</artifactId>
  <version>3.5.1</version>
  <configuration>
    <source>1.6</source>
    <target>1.6</target>
  </configuration>
</plugin>
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-eclipse-plugin</artifactId>
  <version>2.10</version>
  <configuration>
    <downloadSources>true</downloadSources>
    <downloadJavadocs>true</downloadJavadocs>
  </configuration>
</plugin>
<plugin>
  <groupId>org.codehaus.mojo</groupId>
  <artifactId>exec-maven-plugin</artifactId>
  <version>1.6.0</version>
  <executions>
    <execution>
      <goals>
        <goal>exec</goal>
      </goals>
    </execution>
  </executions>
  <configuration>
    <mainClass>com.mgdbbootcamp.test.App</mainClass>
  </configuration>
</plugin>
```
### complie the App
```
$mvn package
```
or
```
$mvn compile
```

### run the App
```
 mvn exec:java
```
