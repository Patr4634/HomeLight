#include "Light.h"
#include "LightStates.h"
#include <Arduino.h>
#include <algorithm>
#include <vector>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <uri/UriBraces.h>

using namespace std;

const char *ssid = "";
const char *password = "";

ESP8266WebServer server(80);

vector<Light> Lights =
    {
        Light(D5),
        Light(D6)};

void handle_LedToggle();
void handle_NotFound();

void setup()
{
    Serial.begin(9600);
    // Serial.begin(115200);
    delay(100);

    for (int i = 0; i < Lights.size(); ++i)
        pinMode(Lights[i].Pin(), OUTPUT);

    Serial.println("Connecting to ");
    Serial.println(ssid);

    // connect to your local wi-fi network
    WiFi.begin(ssid, password);

    // check wi-fi is connected to wi-fi network
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.print(".");
    }
    Serial.println("\nWiFi connected..!");
    Serial.print("Got IP: ");
    Serial.println(WiFi.localIP());

    
    for (int i = 0; i < Lights.size(); ++i)
        Lights[i].ChangeState(LightOff::Instance());

    server.on(UriBraces("/toggle/{}/{}"), HTTP_POST, handle_LedToggle);
    server.onNotFound(handle_NotFound);

    server.begin();
    Serial.println("HTTP server started");
}

void loop()
{
    server.handleClient();

    for (int i = 0; i < Lights.size(); ++i)
        Lights[i].Update();
}

void handle_LedToggle()
{
    String pin = server.pathArg(0); 
    String state = server.pathArg(1);

    Serial.println(pin);
    Serial.println(state);

    auto iterator = find_if(Lights.begin(), Lights.end(), [&](const Light &light)
                            { return String(light.Pin()) == pin; });

    if (iterator == Lights.end())
    {
        handle_NotFound();
    }
    else
    {
        if (state == "1")
        {
            (*iterator).ChangeState(LightOn::Instance());
            return server.send(200, "text/html");
        }
        else if (state == "0")
        {
            (*iterator).ChangeState(LightOff::Instance());
            return server.send(200, "text/html");
        }
    }
    
    server.send(400, "text/plain", "Bad Data");
}

void handle_NotFound()
{
    server.send(404, "text/plain", "Not found");
}