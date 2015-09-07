---
title: "101 on setting up Bluetooth from command line under Debian GNU Linux"
date: 2015-01-14 16:15
---

Over the passed days I had the pleasure to set up an Raspberry Pi with Raspbian and some Bluetooth devices. Since maintaining the device over SSH is crucial, I connected the devices via command line. So here are some of the things I learned about Bluetooth from the command line.

## Install the packages
Bluetooth under Linux is typically provided by [bluez](http://www.bluez.org), which can be installed easily from the Debian repositories.

```sh
sudo apt-get install bluetooth bluez-utils bluez-firmware
```

Once installed you should find a service called bluetooth on your machine and you should check if it is running.

```sh
service bluetooth status
```

You should also check your Bluetooth dongle.

```sh
lsusb | grep Bluetooth
```

This will result in something like *Bus 001 Device 005: ID 0a12:0001 Cambridge Silicon Radio, Ltd Bluetooth Dongle (HCI mode)*, which describes your local device.

## Connect a device as serial port
First you need to scan for Bluetooth devices to connect to.

```sh
hcitool scan
```

The scanning result should be a list of all found Bluetooth devices. Each listed with its MAC address and a vendor name.

Next set the PIN for the device. Many devices use *0000* or *1234* as PIN.

```sh
sudo bluetooth-agent <PIN of the device> <MAC address of the device>
```

The command is only required once for pairing the device. Once paired, it automatically reconnects.

To connect via serial port you need to now, on which channel a serial port can be opened. Bluetooth devices can be asked for this.

```sh
sdptool browse --l2cap <MAC address of the device>
```

This might result in multiple entries like this, describing the capabilities available on each channel.

```
Service Name: GNS GPS
Service RecHandle: 0x10000
Service Class ID List:
  "Serial Port" (0x1101)
Protocol Descriptor List:
  "L2CAP" (0x0100)
  "RFCOMM" (0x0003)
    Channel: 1
Language Base Attr List:
  code_ISO639: 0x656e
  encoding:    0x6a
  base_offset: 0x100
```

Choose a channel, that offers RFCOMM.

Serial ports are configured under `/etc/bluetooth/rfcomm.conf`. Open the file in a text editor and fill it with the following content.

```
rfcomm0 {
  bind yes;
  device <MAC address of the device>;
  channel <channel for RFCOMM>;
  comment "GNS 2000 (GPS & GLONAS)";
}
```

Restart the Bluetooth service and you are done.

```sh
sudo service bluetooth restart
```

## Test the connection
The easies way to test the Bluetooth connection is via Screen. If you have configured a device `rfcomm0` as above, the Bluetooth service will create the device under `/dev/rfcomm0`.

```sh
screen /dev/rfcomm0
```

Screen gives you access to the device. If `/dev/rfcomm0` is a Bluetooth GPS tracker, you should now see the logged data line by line.
