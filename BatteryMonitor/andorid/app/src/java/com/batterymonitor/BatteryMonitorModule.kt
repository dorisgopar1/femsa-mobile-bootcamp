package com.batterymonitor

import android.os.BatteryManager
import android.content.Intent
import android.content.IntentFilter
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

class BatteryMonitorModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "BatteryMonitor"
    }

    @ReactMethod
    fun getBatteryLevel(callback: (Int) -> Unit) {
        val batteryIntent = reactApplicationContext.registerReceiver(
            null,
            IntentFilter(Intent.ACTION_BATTERY_CHANGED)
        )
        val level = batteryIntent?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
        val scale = batteryIntent?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
        val batteryLevel = if (level >= 0 && scale > 0) {
            (level * 100) / scale
        } else {
            -1
        }
        callback(batteryLevel)
    }

    fun emitBatteryLevelChange(level: Int) {
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit("onBatteryLevelChange", level)
    }
}
